import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileNavProvider } from "./contexts/MobileNavContext.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileNavProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </MobileNavProvider>
  </React.StrictMode>,
);
