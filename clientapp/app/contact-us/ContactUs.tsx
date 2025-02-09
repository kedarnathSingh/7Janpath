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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    inquiry_type: "",
    location: "Noida, UP-201301",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    if (!isCaptchaValid) {
      toast.error("Please solve the captcha correctly.");
      setIsSubmitting(false);
      return;
    }

    const requestBody = {
      ...formData,
      mobile: Number(formData.mobile),
      status: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3000/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success("Enquire submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          inquiry_type: "",
          location: "Noida, UP",
          message: "",
        });
        setIsSubmitting(false);
        setIsCaptchaValid(false); 
        setCaptchaKey(prevKey => prevKey + 1);
      } else {
        toast.error("Failed to submit the form. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <HeadersComponent />
      <div className="contact-us">
        <div className="header text-center">
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
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter number"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Enquiry type</label>
                    <select
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                    >
                      <option value="">Select enquiry type</option>
                      <option value="general">General</option>
                      <option value="support">Support</option>
                      <option value="business">Business Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 contact-input-box">
                  <label>Message</label>
                  <textarea class="contact-textarea"
  name="message"
  placeholder="Enter your message"
  required
  value={formData.message}
  onChange={handleChange}
/>

                </div>
                <div className="row mt-3">
                  <div className="col-sm-12 contact-input-box">
                    <label>Captcha Verification</label>
                    <div className="captcha-box">
                    <MathCaptcha key={captchaKey} onCaptchaVerified={setIsCaptchaValid} />
                    </div>
                  </div>
                </div>
                <br/>
                <div class="text-center">
                <button
                  className="book-btn-set"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </button>
                </div>
              </div>
              <div className="col-sm-6">
              <div class="text-center">
                <h4>Our Office</h4>
                
                <p>
                  <strong>Address:</strong> MZ-007, Ansal Fortune Arcade, <br/>
                  Sector-18, Noida, UP-201301
                </p>
                <p><strong>Email:</strong> business@7travelmoney.com</p>
                <p><strong>Phone:</strong> +91 9810474842</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
