import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

// GitHub Pages SPA Redirect Fix
const redirect = window.location.search;

if (redirect.startsWith("?/")) {
  const decoded = redirect
    .replace("?/", "/")
    .replace(/~and~/g, "&");

  window.history.replaceState(
    null,
    null,
    decoded
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);