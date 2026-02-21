// src/App.jsx
import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

function App() {
  // تحديد الصفحة الحالية بناءً على URL
  const path = window.location.pathname;
  
  if (path === '/contact') {
    return <ContactPage />;
  }
  
  return <HomePage />;
}

export default App;