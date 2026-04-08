import { createRoot } from 'react-dom/client';
import './index.css';
import '@fontsource/inter/600.css';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

if (import.meta.env.DEV) {
  window.addEventListener('beforeunload', () => {
    console.warn(
      '[nav-debug] beforeunload fired (this is a real document unload)'
    );
  });
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <App />
  </ErrorBoundary>
);
