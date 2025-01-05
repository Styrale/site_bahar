import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Vérifie que le chemin est correct
console.log("Index.js is running!");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Vérifie que l'id correspond à celui dans index.html
);
