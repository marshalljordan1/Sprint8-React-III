import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShipListProvider } from "./context/ShipList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShipListProvider>
      <App />
    </ShipListProvider>
  </React.StrictMode>
);
