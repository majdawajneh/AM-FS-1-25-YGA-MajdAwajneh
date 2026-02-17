import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css" 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

