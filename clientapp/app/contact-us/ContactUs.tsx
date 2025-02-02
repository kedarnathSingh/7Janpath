"use client";
import { useState } from "react";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";
import MathCaptcha from "../components/MathCaptcha";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import "./contact.scss";

const ContactUs = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isCaptchaValid) {
      toast.error("Please solve the captcha correctly.");
      return;
    }

    toast.success("Form submitted successfully!");
  };

  return (
    <div>
      <HeadersComponent />
      <div className="contact-us">
        <div className="header">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <h4>Enquire Now</h4>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label htmlFor="username">Name</label>
                    <input type="text" placeholder="Enter name" name="username" required />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" name="useremail" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label>Phone</label>
                    <input type="text" placeholder="Enter number" name="userphone" required />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Enquiry type</label>
                    <select required>
                      <option value="">Select enquiry type</option>
                      <option value="general">General</option>
                      <option value="support">Support</option>
                      <option value="business">Business Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-12">
                    <label>Captcha Verification</label>
                    <div className="captcha-box">
                      <MathCaptcha onCaptchaVerified={setIsCaptchaValid} />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </div>
              
              <div className="col-sm-6">
                <h4>Our Office</h4>
                <p>Address: MZ-007, Ansal Fortune Arcade, Sector-18, Noida, UP-201301</p>
                <p>Email: Business@7travelmoney.com</p>
                <p>Phone: +91 9810474842</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
      <ToastContainer/>
    </div>
  );
};

export default ContactUs;
