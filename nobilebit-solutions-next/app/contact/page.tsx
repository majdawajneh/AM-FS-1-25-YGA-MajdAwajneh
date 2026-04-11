"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name required';
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';

    if (!formData.subject.trim()) newErrors.subject = 'Subject required';
    if (!formData.message.trim()) newErrors.message = 'Message required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      validateForm();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    try {
      // Mock API submission - replace with EmailJS or real API
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        {/* Hero Section - No Image */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Contact Us
                <span className={styles.accent}>Now</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Have a project? Let's discuss how we can bring your vision to life
              </p>
              <Link href="#contact-form" className={styles.heroCta}>
                Start Conversation <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <p>workinfo@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className={styles.infoContent}>
                  <h3>Phone</h3>
                  <p>+962 7XXXXXXXX</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className={styles.infoContent}>
                  <h3>Location</h3>
                  <p>Amman, Jordan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.formTitle}>Leave a Message</h2>
                
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${errors.subject ? styles.error : ''}`}
                  />
                  {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`${styles.submitBtn} ${status === 'submitting' ? styles.loading : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    'Sent Successfully! 🎉'
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    An error occurred. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
