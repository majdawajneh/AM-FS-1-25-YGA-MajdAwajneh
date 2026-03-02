import Link from "next/link";
import  "../assets/CSS/Contact.css";

export default function ContactPage() {
    return (

        <div className="contact-form pt-3">
        <div className="container">
            <h2 className="text-center mb-4 pt-5 pb-2">Get in Touch</h2>
            <p className="text-center">We'd love to hear from you! Please fill out the form below and We'll get back to you as soon as possible.</p>
            <form action="" method="get" className="col-md-6 col-lg-4 m-5 mt-3 " id="contact-form" noValidate>
                <div className="mb-1">
                    <label htmlFor="firstname" className="form-label p-4">First Name</label>
                    <input type="text" className="form-control mb-2" id="firstname" placeholder="Enter your FirstName" required/>
                    <div className="error" id="fname-error"></div>
                </div>
                <div className="mb-1">
                    <label htmlFor="lastname" className="form-label p-4">Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter your LastName" required/>
                    <div className="error" id="lname-error"></div>
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="form-label p-4">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                    <div className="error" id="email-error"></div>
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="message" className="form-label p-4">Message</label>
                    <textarea className="form-control" id="message"  placeholder="We'd love to hear from you!" autoComplete="off" required></textarea>
                </div>
                <button type="submit" className="btn" id="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}