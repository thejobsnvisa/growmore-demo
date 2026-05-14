import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;

  const redirectUrl = new URL(redirect);

  window.history.replaceState(
    null,
    null,
    redirectUrl.pathname +
      redirectUrl.search +
      redirectUrl.hash
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  </BrowserRouter>
);