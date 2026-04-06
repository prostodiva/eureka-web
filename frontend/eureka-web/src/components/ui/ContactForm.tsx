import { useState } from 'react';
import { ImEnvelop } from "react-icons/im";

function ContactForm() {
    const [accepted, setAccepted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setAccepted(false);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto py-16 text-white text-center">
                <div className="text-5xl">
                    <ImEnvelop />
                </div>
                <h3 className="text-2xl font-semibold">Message Sent!</h3>
                <p className="text-white/70">Thanks for reaching out. We'll get back to you soon.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 bg-purple-700 hover:bg-purple-800 transition-colors px-6 py-3 text-white font-semibold"
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-4 w-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40"
                />
            </div>

            <textarea
                placeholder="Type your message..."
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40 resize-none"
            />

            <label className="flex items-center gap-2 text-white text-sm cursor-pointer">
                <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    className="w-4 h-4 accent-purple-700"
                />
                <span>
          I accept the{' '}
                    <a href="/terms" className="underline">Terms</a>{' '}
                    by subscribing you agree to with our{' '}
                    <a href="/privacy" className="underline">Privacy Policy</a>
        </span>
            </label>

            <button
                type="submit"
                disabled={!accepted || status === 'loading'}
                className="w-full bg-purple-700 text-white font-inter font-semibold py-4 disabled:opacity-50 hover:bg-purple-800 transition-colors"
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
                <p className="text-center mt-2 text-red-300">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

export default ContactForm;