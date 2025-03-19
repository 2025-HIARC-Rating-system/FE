import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {Analytics} from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Analytics />
    </StrictMode>
  </BrowserRouter>
);
