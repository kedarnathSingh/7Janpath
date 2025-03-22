"use client";
import { useState } from "react";
import MathCaptcha from "../components/MathCaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

interface FormDataType {
  name: string;
  email: string;
  mobile: string;
  inquiry_type: string;
  location: string;
  message: string;
}

const initialFormState: FormDataType = {
  name: "",
  email: "",
  mobile: "",
  inquiry_type: "",
  location: "Noida, UP-201301",
  message: "",
};

const ContactForm = ({ onSubmit }: { onSubmit: (data: FormDataType) => void }) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isCaptchaValid) {
      toast.error("Please solve the captcha correctly.");
      return;
    }

    setIsSubmitting(true);
    const success = await onSubmit(formData);
    
    if (success) {
      setFormData(initialFormState);
      setIsCaptchaValid(false);
      setCaptchaKey((prev) => prev + 1);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Enquire Now</h4>
      <div className="row">
        <div className="col-sm-6 contact-input-box">
          <label>Name</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-sm-6 contact-input-box">
          <label>Email</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 contact-input-box">
          <label>Phone</label>
          <input type="text" name="mobile" required value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="col-sm-6 contact-input-box">
          <label>Enquiry type</label>
          <select name="inquiry_type" required value={formData.inquiry_type} onChange={handleChange}>
            <option value="">Select enquiry type</option>
            <option value="general">General</option>
            <option value="support">Support</option>
            <option value="business">Business Inquiry</option>
          </select>
        </div>
      </div>
      <div className="contact-input-box">
        <label>Message</label>
        <textarea className="contact-textarea" name="message" required value={formData.message} onChange={handleChange} />
      </div>
      <div className="contact-input-box">
        <label>Captcha Verification</label>
        <MathCaptcha key={captchaKey} onCaptchaVerified={setIsCaptchaValid} />
      </div>
      <div className="text-center">
        <button type="submit" className="mt-3 book-btn-set" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

const OfficeInfo = () => (
  <div className="text-center">
    <h4>Our Office</h4>
    <p>
      <strong>Address:</strong> MZ-007, Ansal Fortune Arcade, <br />
      Sector-18, Noida, UP-201301
    </p>
    <p><strong>Email:</strong> business@7travelmoney.com</p>
    <p><strong>Phone:</strong> +91 9810474842</p>
  </div>
);

const ContactUs = () => {
  const submitForm = async (formData: FormDataType) => {
    try {
      const response = await fetch("http://localhost:3000/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          mobile: Number(formData.mobile),
          status: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast.success("Enquiry submitted successfully!");
        return true;
      } else {
        toast.error("Failed to submit the form. Please try again.");
        return false;
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      return false;
    }
  };

  return (
    <div className="contact-us">
      <div className="header text-center">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-container row">
        <div className="col-sm-6">
          <ContactForm onSubmit={submitForm} />
        </div>
        <div className="col-sm-6">
          <OfficeInfo />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
