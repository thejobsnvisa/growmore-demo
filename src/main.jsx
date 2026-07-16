// 🛡️ Pre-render Polyfill for legacy react-snap Chromium support
if (!Object.hasOwn) {
  Object.hasOwn = function (object, property) {
    if (object == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    return Object.prototype.hasOwnProperty.call(object, property);
  };
}

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

// Handle GitHub Pages SPA redirect logic safely
if (typeof window !== "undefined") {
  const redirect = window.sessionStorage.getItem("redirect");

  if (redirect) {
    window.sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", redirect);
  }
}

const rootElement = document.getElementById("root");

// ⚡ Use hydration if pre-rendered content exists, fallback to standard rendering if blank
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}