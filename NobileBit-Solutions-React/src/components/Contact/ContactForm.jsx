// src/components/Contact/ContactForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../../assets/Contact.css';

function ContactForm() {
  // ===== STATE ===== (نفس المتغيرات في الكود الأصلي)
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // رسائل الخطأ (نفس fnameError, lnameError, emailError)
  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // كلاسات الإدخال (invalid/valid)
  const [fnameClass, setFnameClass] = useState('');
  const [lnameClass, setLnameClass] = useState('');
  const [emailClass, setEmailClass] = useState('');

  // ===== REFERENCES ===== (نفس querySelector)
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const submitBtnRef = useRef(null);
  const inputFieldsRef = useRef([]);

  // ===== REGEX PATTERN ===== (نفس emailPattern)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // ===== VARIABLES FOR VALIDATION ===== (نفس nameValid, emailValid)
  const [, setNameValid] = useState(false);
  const [, setEmailValid] = useState(false);

  // ===== EFFECT: WINDOW.ONLOAD ===== (نفس window.onload)
  useEffect(() => {
    // نفس firstname.focus() في window.onload
    if (firstnameRef.current) {
      firstnameRef.current.focus();
    }

    // جمع كل حقول الإدخال (نفس querySelectorAll)
    inputFieldsRef.current = [
      firstnameRef.current,
      lastnameRef.current,
      emailRef.current,
      messageRef.current
    ].filter(ref => ref !== null);
    
  }, []);

  // ===== FUNCTIONS LIKE THE ORIGINAL =====

  // نفس fnamesuccess object
  const fnameSuccess = {
    removeError: () => {
      setFnameError('');
    },
    addSuccess: () => {
      // في CSS الأصلي، class success يغير اللون للأخضر
    },
    setText: (text) => {
      setFnameError(text);
    }
  };

  // نفس lnamesuccess object
  const lnameSuccess = {
    removeError: () => {
      setLnameError('');
    },
    addSuccess: () => {
      // في CSS الأصلي، class success يغير اللون للأخضر
    },
    setText: (text) => {
      setLnameError(text);
    }
  };

  // نفس emailsuccess object
  const emailSuccess = {
    removeError: () => {
      setEmailError('');
    },
    addSuccess: () => {
      // في CSS الأصلي، class success يغير اللون للأخضر
    },
    setText: (text) => {
      setEmailError(text);
    }
  };

  // ===== HANDLE CHANGE =====
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
    // إعادة تعيين الرسالة عند الكتابة
    if (fnameError) setFnameError('');
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
    if (lnameError) setLnameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // ===== VALIDATION FUNCTION (نفس ContactValidation) =====
  const validateForm = (e) => {
    e.preventDefault(); // نفس f.preventDefault()

    let isNameValid = false;
    let isEmailValid = false;

    // التحقق من الاسم الأول (نفس الكود الأصلي)
    if (firstname !== "" && firstname.length >= 3) {
      isNameValid = true;
      setFnameClass('valid');
      fnameSuccess.removeError();
      fnameSuccess.addSuccess();
      fnameSuccess.setText("First name looks good!");
    } else {
      e.preventDefault(); // تأكيد منع الإرسال
      setFnameError("First name must be more than 3 characters.");
      setFnameClass('invalid');
    }

    // التحقق من الاسم الأخير (نفس الكود الأصلي)
    if (lastname !== "" && lastname.length >= 3) {
      isNameValid = true;
      setLnameClass('valid');
      lnameSuccess.removeError();
      lnameSuccess.addSuccess();
      lnameSuccess.setText("Last name looks good!");
    } else {
      e.preventDefault();
      setLnameError("Last name must be more than 3 characters.");
      setLnameClass('invalid');
    }

    // التحقق من البريد الإلكتروني (نفس الكود الأصلي)
    if (email.match(emailPattern)) {
      isEmailValid = true;
      setEmailClass('valid');
      emailSuccess.removeError();
      emailSuccess.addSuccess();
      emailSuccess.setText("Email looks good too!");
    } else {
      e.preventDefault();
      setEmailError("Please enter a valid email address.");
      setEmailClass('invalid');
    }

    // تحديث حالة التحقق
    setNameValid(isNameValid);
    setEmailValid(isEmailValid);

    // إذا كان كل شيء صحيح، يمكن إرسال النموذج
    if (isNameValid && isEmailValid) {
      console.log('Form submitted successfully!', { firstname, lastname, email, message });
      // هنا يمكنك إرسال البيانات إلى API
      
      // اختياري: إعادة تعيين النموذج
      // setFirstname('');
      // setLastname('');
      // setEmail('');
      // setMessage('');
    }
  };

  // ===== RENDER (نفس HTML الأصلي مع التعديلات) =====
  return (
    <div className="contact-form pt-3">
      <div className="container">
        <h2 className="text-center mb-4 pt-5 pb-2">Get in Touch</h2>
        <p className="text-center">
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={validateForm} className="col-md-6 col-lg-4 m-5 mt-3" id="contact-form" noValidate>
          {/* First Name Field */}
          <div className="mb-1">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input 
              type="text" 
              ref={firstnameRef}
              className={`form-control mb-2 ${fnameClass}`}
              id="firstname" 
              placeholder="Enter your FirstName" 
              value={firstname}
              onChange={handleFirstnameChange}
              required 
            />
            <div className={fnameError ? 'error' : fnameClass === 'valid' ? 'success' : ''} id="fname-error">
              {fnameError}
            </div>
          </div>

          {/* Last Name Field */}
          <div className="mb-1">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input 
              type="text" 
              ref={lastnameRef}
              className={`form-control mb-2 ${lnameClass}`}
              id="lastname" 
              placeholder="Enter your LastName" 
              value={lastname}
              onChange={handleLastnameChange}
              required 
            />
            <div className={lnameError ? 'error' : lnameClass === 'valid' ? 'success' : ''} id="lname-error">
              {lnameError}
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              ref={emailRef}
              className={`form-control mb-2 ${emailClass}`}
              id="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={handleEmailChange}
              required 
            />
            <div className={emailError ? 'error' : emailClass === 'valid' ? 'success' : ''} id="email-error">
              {emailError}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-3 w-100">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              ref={messageRef}
              rows="5" 
              placeholder="We'd love to hear from you!" 
              value={message}
              onChange={handleMessageChange}
              autoComplete="off"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn" 
            id="submit"
            ref={submitBtnRef}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;