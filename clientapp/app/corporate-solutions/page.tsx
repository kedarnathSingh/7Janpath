"use client";
import { useState } from "react";
import React from "react";
import HeadersComponent from "../components/headers/HeadersComponent";
import FooterComponent from "../components/footer/FooterComponent";
import { useRouter } from "next/navigation";

const CorporateSolutions: React.FC = () => {
  const router = useRouter();

  // Form State
  const [contactName, setContactName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ contactName, contactNumber, contactEmail });
  };

  return (
    <div>
      <HeadersComponent />
      <div className="top-banner-sec-main">
        {/* Carousel & Form Section */}
        <div className="container">
          <div className="row align-items-center">
            {/* Carousel Section */}
            <div className="col-md-7">
              <div
                id="carouselExampleCaptions"
                className="carousel custom-carusel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block">
                      <figure>
                        <img src="images/banner-icon-1.svg" />
                      </figure>
                      <h2>24*7 Online International Money Transfer via BookMyForex</h2>
                      <ul>
                        <li>Zero transfer charges | Use Promo code ZEROBANKFEE</li>
                        <li>Say NO to Bank Visits | Transfer Anytime, Anywhere</li>
                        <li>Live Exchange Rate | Lowest Rates Guaranteed</li>
                        <li>Funds received abroad within 12 - 48 hours</li>
                      </ul>
                      <button className="book-btn-set">Transfer Money Now</button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Signup Form Section */}
            <div className="col-md-5 ">
              <div className="signup-form bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  Sign up for our Online Corporate Services
                </h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                  {/* Contact Name */}
                  <div className="col-12">
                    <label className="form-label text-gray-700">Contact Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter contact name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="col-12">
                    <label className="form-label text-gray-700">Contact Number</label>
                    <div className="input-group">
                      <span className="input-group-text bg-blue-500 text-grey">+91</span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter 10 digit contact mobile number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        maxLength={10}
                        pattern="\d{10}"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Email */}
                  <div className="col-12">
                    <label className="form-label text-gray-700">Contact Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email ID"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white text-lg font-bold py-2 px-6 rounded-full shadow-lg w-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default CorporateSolutions;
