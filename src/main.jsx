import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShipListContextProvider } from "./context/ShipListContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <ShipListContextProvider>
        <App />
      </ShipListContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
