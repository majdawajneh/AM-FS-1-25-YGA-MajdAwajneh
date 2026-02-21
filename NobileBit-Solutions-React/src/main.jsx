import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap أولاً
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ثم ملفات CSS الخاصة بك
import './assets/Style.css';  // تأكد أن المسار صحيح
// import './assets/Contact.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);