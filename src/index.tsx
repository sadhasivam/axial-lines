import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Auth0Provider
    domain="kadalamittai.auth0.com"
    clientId="yorSCB6l5yZopgiy6MznTuZdberTcPUe"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
