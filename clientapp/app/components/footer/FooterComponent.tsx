"use client";
import React, { useState } from "react";
import PopupModal from "../PopupModal";
import CurrencyConverter from "../CurrencyConverter"; // Import the CurrencyConverter component
import './FooterComponent.scss';

const FooterComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConverterOpen, setIsConverterOpen] = useState(false); // State for Currency Converter popup

    return (
        <footer className="footer-home-main">
            <div className="row">
                <div className="col-md-5 footer-home-menu">
                    <div className="col-md-3 footer-home-menu pt-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a className="dropdown-item" href="/offers">Special Offers</a></li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default link behavior
                                        setIsConverterOpen(true); // Open Currency Converter popup
                                    }}
                                >
                                    Currency Converter
                                </a>
                            </li>
                            <li><a className="dropdown-item" href="#">Careers</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setIsModalOpen(true)}>Term and Conditions</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => setIsModalOpen(true)}>our Policies</a></li>
                            <li><a className="dropdown-item" href="#">Press release</a></li>
                            <li><a className="dropdown-item" href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 footer-home-menu">
                    <h3>Our Services </h3>
                    <ul>
                        <li><a className="dropdown-item" href="/home">Home</a></li>
                        <li><a className="dropdown-item" href="/about-us">About Us</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setIsModalOpen(true)}>Share & security</a></li>
                        <li><a className="dropdown-item" href="/financial-services">Financial Services</a></li>
                        <li><a className="dropdown-item" href="/send-money-abroad">Send Money Abroad</a></li>
                        <li><a className="dropdown-item" href="/travel-insurance">Travel insurance</a></li>
                        <li><a className="dropdown-item" href="/international-sim-card">International Simcard</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-home-menu">
                    <h3>More Way to Contact </h3>
                    <p><img src="images/location.svg" /> MZ-007, Ansal Fortune Arcade, Sector-18, Noida, UP-201301</p>
                    <p><img src="images/phone.svg" /> Mobile: +91- 9810474842, 9910710835</p>
                    <p>Email: <a className="email-id" href="mailto:Business@7travelmoney.com?cc=info@7janpath.com&subject=Forex%20Enquiry&body=Forex%20enquiry" target="_top">Business@7travelmoney.com</a></p>
                    <p><img src="images/time.svg" /> Working Timing - 10.00 AM to 7 PM  </p>
                </div>
            </div>

            <hr />
            <div className="clearfix"></div>

            <div className="row mt-1">
                <div className="col-md-10 mt-1 text-left footer-create-text">
                    Copyright © 2024 7TravelMoney
                </div>
                <PopupModal
                    isOpen={isModalOpen}
                    title="Terms and Conditions"
                    onClose={() => setIsModalOpen(false)}
                />
            </div>

            {/* Currency Converter Popup */}
            {isConverterOpen && (
                <CurrencyConverter
                    onClose={() => setIsConverterOpen(false)} // Close the Currency Converter popup
                />
            )}
        </footer>
    );
};

export default FooterComponent;

// "use client";
// import { useState } from "react";
// import PopupModal from "../PopupModal";
// import "./FooterComponent.scss";

// const FooterComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <footer className="footer-home-main">
//         <div className="row">
//           <div className="col-md-5 footer-home-menu">
//             <div className="col-md-3 footer-home-menu pt-4">
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><a className="dropdown-item" href="#">Special Offers</a></li>
//                 <li><a className="dropdown-item" href="#">Currencies</a></li>
//                 <li><a className="dropdown-item" href="#">Currency Converter</a></li>
//                 <li><a className="dropdown-item" href="#">Careers</a></li>
//                 <li>
//                   <a className="dropdown-item" href="#" onClick={() => setIsModalOpen(true)}>
//                     Terms and Conditions
//                   </a>
//                 </li>
//                 <li><a className="dropdown-item" href="#">Our Policies</a></li>
//                 <li><a className="dropdown-item" href="#">Press Release</a></li>
//                 <li><a className="dropdown-item" href="#">Sitemap</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Reusable Popup Modal */}
//       <PopupModal
//         isOpen={isModalOpen}
//         title="Terms and Conditions"
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// };

// export default FooterComponent;
