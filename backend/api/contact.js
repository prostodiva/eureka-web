const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // App password recommended
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Shows who submitted the form
            to: process.env.EMAIL_USER,    // Your receiving email
            subject: `Contact Form Message from ${name}`,
            text: message,
            html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
        });

        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;