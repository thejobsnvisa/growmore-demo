import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ViteSSG } from 'vite-ssg';
import './index.css';
import App from './App.jsx';

// We export 'createApp'. Vite-SSG uses this to render your pages 
// into static HTML files during the build process.
export const createApp = ViteSSG(
  App,
  { base: import.meta.env.BASE_URL },
  () => {
    return (
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    );
  }
);