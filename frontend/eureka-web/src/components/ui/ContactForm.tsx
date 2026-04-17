import { useState } from 'react';
import { ImEnvelop } from 'react-icons/im';
import Turnstile from './Turnstile.tsx';

function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '';
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as
    | string
    | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, turnstileToken }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setAccepted(false);
        setTurnstileToken(null);
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
        <p className="text-white/70">
          Thanks for reaching out. We'll get back to you soon.
        </p>
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
    <form
      className="flex flex-col gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0"
      onSubmit={handleSubmit}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/40"
        />

        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Type your message..."
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-white/40 resize-none"
      />

      {/* Checkbox */}
      <label className="flex items-start gap-2 text-white text-xs sm:text-sm cursor-pointer leading-snug">
        <input
          type="checkbox"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
          className="w-4 h-4 mt-0.5 accent-purple-700 shrink-0"
        />
        <span>
          I accept the{" "}
          <a href="/terms" className="underline">Terms</a>{" "}
          and agree with our{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>
        </span>
      </label>

      {/* Turnstile */}
      <div className="scale-90 sm:scale-100 origin-left">
        {turnstileSiteKey ? (
          <Turnstile
            siteKey={turnstileSiteKey}
            onToken={setTurnstileToken}
            theme="auto"
            className="mt-1"
          />
        ) : (
          <p className="text-center text-red-300 text-sm">
            Turnstile is not configured.
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={!accepted || !turnstileToken || status === 'loading'}
        className="w-full bg-purple-700 text-white font-inter font-semibold py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 hover:bg-purple-800 transition-colors"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Error */}
      {status === 'error' && (
        <p className="text-center mt-1 text-red-300 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
