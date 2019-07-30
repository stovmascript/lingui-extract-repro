import App from "./src/App.js";
import { I18nProvider } from "@lingui/react";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <I18nProvider language="cs">
    <App />
  </I18nProvider>,
  document.getElementById("root")
);
