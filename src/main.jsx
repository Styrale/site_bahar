import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./App.css";

const root = createRoot(document.getElementById('root'));   // notice the '!'
root.render(<App />);
