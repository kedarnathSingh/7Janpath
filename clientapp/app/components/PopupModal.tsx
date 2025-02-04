"use client";
import React, { useState, useEffect } from "react";
import "./PopupModal.scss"; // Ensure styles are in place

interface PopupModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, title, onClose }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Function to close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Toggle Accordion Sections
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <h2>{title || "Terms and Conditions"}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        {/* Scrollable Content with Accordion */}
        <div className="modal-body">
          {accordionData.map((section, index) => (
            <div key={index} className="accordion-section">
              <button className="accordion-header" onClick={() => toggleSection(index)}>
                {section.title}
                <span>{openSection === index ? "−" : "+"}</span>
              </button>
              {openSection === index && (
                <div className="accordion-content" dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// Accordion Sections
const accordionData = [
  {
    title: "Terms & Conditions",
    content: `
      <p>This website and its services are governed by applicable Indian laws and regulations. 
      By accessing or using our platform, you agree to comply with all terms, policies, and notices mentioned herein.</p>
    `,
  },
  {
    title: "Compliance with Laws",
    content: `
      <p>The users shall comply with all applicable laws, including the Foreign Exchange Management Act, 
      1999 (FEMA) and Anti-Money Laundering Guidelines of the RBI.</p>
    `,
  },
  {
    title: "Jurisdiction",
    content: `
      <p>All disputes will be governed and interpreted under the laws of India. 
      The place of jurisdiction for all disputes shall be exclusively in Delhi.</p>
    `,
  },
  {
    title: "RBI Guidelines: Forex Limits",
    content: `
      <p>Maximum forex purchase limit: <strong>USD 2,50,000</strong> per traveler per financial year.</p>
      <p>Cash limit: <strong>USD 3,000</strong>; remainder must be via forex card or traveler’s cheques.</p>
      <p>Foreign exchange is prohibited for use in Nepal & Bhutan.</p>
    `,
  },
  {
    title: "Permitted Purpose for Foreign Exchange",
    content: `
      <ul>
        <li>Personal visits (except Nepal & Bhutan)</li>
        <li>Education & Medical expenses</li>
        <li>Business travel & Employment abroad</li>
      </ul>
    `,
  },
  {
    title: "Payment Methods",
    content: `
      <p>Payments can be made using RTGS, NEFT, IMPS, or UPI. Cash payments are limited to INR 50,000.</p>
      <p>Card payments require the traveler and cardholder to be the same person.</p>
    `,
  },
  {
    title: "Encashment Certificate",
    content: `
      <p>Encashment certificates are required for forex transactions above USD 5,000.</p>
      <p>The certificate is valid for <strong>90 days</strong> from the date of issuance.</p>
    `,
  },
  {
    title: "Contact & Dispute Resolution",
    content: `
      <p>For assistance, contact us at <strong>+91-9810474842</strong> or <strong>Business@7travelmoney.com</strong>.</p>
      <p>All disputes will be handled under the jurisdiction of Delhi, India.</p>
    `,
  },
];

export default PopupModal;
