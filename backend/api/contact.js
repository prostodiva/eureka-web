const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');
const router = express.Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false
});

const ContactSchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    message: z.string().trim().min(1).max(2000),
    turnstileToken: z.string().trim().min(1).max(2048)
});

async function verifyTurnstile(token, remoteIp) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        throw new Error('TURNSTILE_SECRET_KEY is not configured');
    }
    if (typeof fetch !== 'function') {
        throw new Error('Global fetch is not available in this Node version');
    }

    const body = new URLSearchParams();
    body.set('secret', secret);
    body.set('response', token);
    if (remoteIp) body.set('remoteip', remoteIp);

    const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body
    });

    if (!resp.ok) return { success: false };
    return await resp.json();
}

const stripHeaderBreaks = (s) => String(s).replace(/[\r\n]+/g, ' ').trim();

router.post('/', contactLimiter, async (req, res) => {
    const parsed = ContactSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const { name, email, message, turnstileToken } = parsed.data;

    try {
        const verification = await verifyTurnstile(turnstileToken, req.ip);
        if (!verification?.success) {
            return res.status(403).json({ error: 'Bot verification failed' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // App password recommended
            },
        });

        await transporter.sendMail({
            // Never use user-controlled "from" (spoofing / header injection / DMARC issues).
            from: process.env.EMAIL_USER,
            replyTo: stripHeaderBreaks(email),
            to: process.env.EMAIL_USER,
            subject: `Contact Form Message from ${stripHeaderBreaks(name)}`,
            text: `Message:\n${message}\n\nFrom:\n${name} <${email}>\n`,
        });

        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;