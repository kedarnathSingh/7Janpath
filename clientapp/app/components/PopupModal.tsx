"use client";
import React from "react";
import "./PopupModal.scss"; // Ensure styles are in place

interface PopupModalProps {
  isOpen: boolean;
  title?: string;
  content?: string;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <h2>{title || "Terms and Conditions"}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        {/* Scrollable Content */}
        <div className="modal-body">
          <div dangerouslySetInnerHTML={{ __html: content || defaultTermsAndConditions }} />
        </div>
      </div>
    </div>
  );
};

// Default Content for Terms & Conditions and RBI Guidelines
const defaultTermsAndConditions = `
  <h3>📜 Terms and Conditions</h3>
  <p>This Web site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein...</p>

  <h4>⚖️ Compliance with Laws</h4>
  <p>The users shall comply with all applicable laws (including Foreign Exchange Management Act, 1999 or Anti-Money laundering Guidelines of the RBI)...</p>

  <h4>📍 Jurisdiction</h4>
  <p>Terms of Use shall be governed by and interpreted in accordance with the laws of India...</p>

  <h4>📞 Contact Information</h4>
  <p>For further details, please contact us at <strong>+91-9810474842</strong></p>

  <hr/>

  <h3>🏦 RBI Guidelines</h3>
  <h4>How much foreign exchange can I buy in India for traveling abroad?</h4>
  <p>You can buy a maximum of <strong>USD 2,50,000</strong> per traveler per financial year...</p>

  <h4>📌 Separate Limit for Carrying Currency Notes?</h4>
  <p>Travelers are allowed to purchase foreign currency notes/coins only up to <strong>USD 3000</strong>...</p>

  <h4>🚫 Country-Specific Restrictions</h4>
  <p>Foreign Exchange cannot be released to <strong>Nepal & Bhutan</strong>.</p>

  <h4>✅ Permitted Purpose for Releasing Foreign Exchange</h4>
  <ul>
    <li>Personal visits (except Nepal & Bhutan)</li>
    <li>Education & Medical expenses</li>
    <li>Business travel & Employment abroad</li>
  </ul>

  <h4>🔍 Definition of “Resident Indian”</h4>
  <p>A person residing in India for more than <strong>182 days</strong> during the course of the preceding financial year...</p>

  <h4>💳 Can I make payment via Debit/Credit Card for Forex?</h4>
  <p>Yes, subject to the cardholder and traveler being the same person.</p>

  <h4>📜 Encashment Certificate & Validity</h4>
  <p>Encashment Certificate is valid for <strong>90 days</strong> from the date of issuance.</p>
`;

export default PopupModal;
