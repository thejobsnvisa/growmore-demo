import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";
const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, "", redirect);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
      <App />
    </HelmetProvider>
);