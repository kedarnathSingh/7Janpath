"use client";
import { useState, useEffect, useCallback } from "react";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";
import Recaptcha from 'react-google-recaptcha';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./contact.scss";

const ContactUs = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<string | null>();
  const [isMounted, setIsMounted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [contactForm, setContactForm] = useState({
    username: '',
    useremail: '',
    message: '',
  });
  const styles = {
    error: { color: 'red', paddingTop: '5px'}
  }

  const handleEnquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmit(true);
    validateForm();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('username') as string;
    const email = formData.get('useremail') as string;
    const message = formData.get('message') as string;
    console.log(errors);

    if (!isFormValid) {
      return;
    }
    if (!isCaptchaVerified) {
      alert('Please verify the captcha.');
      return;
    }

    fetch(`${process.env.basePath}/contactus`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "name": name,
          "email": email,
          "message": message,
          "mobile": 9999999999,
          "inquiry_type": "other",
          "status": true,
          "created_at": new Date().toISOString(),
      })
    })
    .then((res) => res.json())
    .then((data) => {
        resetStates();
        alert('Enquiry sent successfully');
    })
    form.reset();
  };

  const resetStates = () => {
    setContactForm({
      username: '',
      useremail: '',
      message: '',
    });
    setErrors({});
    setIsSubmit(false);
    setIsFormValid(false);
    setIsCaptchaVerified(null);
  }

  const validateForm = useCallback(() => {
    let errors: { [key: string]: string } = {};
    const { username, useremail, message } = contactForm;

    const errorsObj = errors;

    if (!username) {
      errorsObj.name = 'Name is required.';
    } else {
      delete errorsObj.name;
    }

    if (!useremail) {
      errorsObj.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(useremail)) {
      errorsObj.email = 'Email is invalid.';
    } else {
      delete errorsObj.email;
    }

    if (!message) {
      errorsObj.message = 'Message is required.';
    } else {
      delete errorsObj.message;
    }

    setErrors(errorsObj);
    const isValid = Object.keys(errorsObj).length === 0;
    setIsFormValid(isValid);

  }, [contactForm]);

  const handleOnFormChange = (event: any) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  useEffect(() => {
    if (isSubmit) {
      validateForm();
    }
  }, [isSubmit, contactForm, validateForm]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <HeadersComponent />
      <div className="contact-us">
        <div className="header">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-container">
          <form method="post" onSubmit={handleEnquirySubmit}>
            <div className="row">
              <div className="col-sm-6">
                <h4>Enquire Now</h4>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label htmlFor="username">Name</label>
                    <input type="text" placeholder="Enter name" name="username" onChange={handleOnFormChange} />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" name="useremail" onChange={handleOnFormChange}/>
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 contact-input-box mt-3">
                    <label>Message</label>
                    <textarea placeholder="Enter message" name="message" maxLength={1000} rows={3} onChange={handleOnFormChange}></textarea>
                    {errors.message && <p style={styles.error}>{errors.message}</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 contact-input-box mt-3">
                    {process.env.captchaSiteKey && <Recaptcha sitekey={process.env.captchaSiteKey} onChange={setIsCaptchaVerified} className="mx-auto" />}
                    <button type="submit" className="btn btn-primary mt-2">Continue</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <h4 className="mx-4 mb-3">7TravelMoney</h4>
                <div className="row">
                  <div className="col-sm-12 contact-address"><i className="bi bi-house-door-fill"></i> MZ-007, Ansal Fortune Arcade, Sector-18, Noida, UP-201301</div>
                </div>
                <div className="row">
                  <div className="col-sm-12 contact-address"><i className="bi bi-telephone-fill"></i> +91- 9810474842, 9910710835</div>
                </div>
                <div className="row">
                  <div className="col-sm-12 contact-address"><i className="bi bi-envelope-at-fill"></i> Business@7travelmoney.com</div>
                </div>
                <div className="row">
                  <div className="col-sm-12 contact-address"><i className="bi bi-clock-fill"></i> Working Timing - 10.00 AM to 7 PM</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
export default ContactUs;