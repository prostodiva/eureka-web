import { useState } from "react";

export default function LegalNotice() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-xs text-black max-w-md m-5">
      <button
        onClick={() => setOpen(!open)}
        className="font-semibold underline"
      >
        {open ? 'Hide Legal Notice' : 'Show Legal Notice'}
      </button>

      {open && (
        <div className="mt-2 leading-relaxed">
          <p>
            This game is provided “as is” and “as available,” without warranties
            of any kind, express or implied. By downloading or using this game,
            you agree to use it at your own risk.
          </p>

          <p className="mt-2">The developer is not responsible for:</p>

          <ul className="list-disc ml-4 mt-1">
            <li>Any damage to your device, hardware, or software</li>
            <li>Data loss, corruption, or system failure</li>
            <li>Security issues, including viruses or malware</li>
            <li>Any indirect, incidental, or consequential damages</li>
          </ul>

          <p className="mt-2">
            This game is provided for portfolio and demonstration purposes only.
            You may not redistribute, resell, or modify it without permission.
          </p>

          <p className="mt-2">
            The developer is not obligated to provide updates, fixes, or
            support, and the game may be changed or removed at any time.
          </p>

          <p className="mt-2">
            This game may include third-party libraries or assets. The developer
            is not responsible for issues arising from them.
          </p>

          <p className="mt-2">
            This game does not collect or store personal data.
          </p>
        </div>
      )}
    </div>
  );
}