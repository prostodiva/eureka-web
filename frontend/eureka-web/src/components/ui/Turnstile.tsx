import { useEffect, useId, useMemo, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact';
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  siteKey: string;
  onToken: (token: string | null) => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  className?: string;
};

let turnstileScriptPromise: Promise<void> | null = null;
function loadTurnstileScript(): Promise<void> {
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise<void>((resolve, reject) => {
    if (window.turnstile) return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load Turnstile')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Turnstile'));
    document.head.appendChild(script);
  });

  return turnstileScriptPromise;
}

export default function Turnstile({ siteKey, onToken, theme = 'auto', size = 'normal', className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reactId = useId();
  const [widgetId, setWidgetId] = useState<string | null>(null);

  const stableKey = useMemo(() => `${reactId}-${siteKey}`, [reactId, siteKey]);

  useEffect(() => {
    let cancelled = false;

    async function mount() {
      await loadTurnstileScript();
      if (cancelled) return;
      if (!containerRef.current) return;
      if (!window.turnstile) throw new Error('Turnstile API not available');

      // Ensure container is empty (Turnstile renders into it).
      containerRef.current.innerHTML = '';

      const id = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        size,
        callback: (token) => onToken(token),
        'expired-callback': () => onToken(null),
        'error-callback': () => onToken(null)
      });

      setWidgetId(id);
    }

    mount().catch(() => {
      onToken(null);
    });

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId);
        } catch {
          // ignore
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey, siteKey, theme, size]);

  return <div ref={containerRef} className={className} />;
}

