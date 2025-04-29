import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

import { AudioProvider } from "./context/AudioContext"; // ✅ DOĞRU İMPORT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AudioProvider>
  </React.StrictMode>
);
