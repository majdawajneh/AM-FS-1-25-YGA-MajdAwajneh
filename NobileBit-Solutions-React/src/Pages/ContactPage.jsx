// src/pages/ContactPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer';
import '../assets/Contact.css'; // استيراد ملف CSS

function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactPage;