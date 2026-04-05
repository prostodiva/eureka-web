import { useState } from 'react';

function ContactForm() {
  const [accepted, setAccepted] = useState(false);

  return (
    <form className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your full name"
          className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Type your message..."
        rows={6}
        className="bg-[#DACBFF] text-white placeholder-[#A37CFF] font-inter px-4 py-3 outline-none focus:ring-2 focus:ring-white/40 resize-none"
      />

      {/* Checkbox */}
      <label className="flex items-center gap-2 text-white text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
          className="w-4 h-4 accent-purple-700"
        />
        <span>
          I accept the{' '}
          <a href="/terms" className="underline">
            Terms
          </a>{' '}
          by subscribing you agree to with our{' '}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={!accepted}
        className="w-full bg-purple-700 text-white font-inter font-semibold py-4 disabled:opacity-50 hover:bg-purple-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
