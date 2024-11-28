import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // Keep this import
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Use the imported App */}
  </React.StrictMode>,
  document.getElementById("root")
);

// For performance monitoring
reportWebVitals();
