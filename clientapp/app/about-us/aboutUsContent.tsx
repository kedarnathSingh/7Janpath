"use client";
import React, { useEffect, useState } from "react";

const AboutUsContent = () => {
  const [data, setPageData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.basePath}/settings/about_us`)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data);
      });
  }, []);

  return (
    <div
      className="about-us-container"
      style={{
        backgroundImage: "url('/images/backAboutUs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(8px)",
        }}
      ></div>

      {/* Main Content Box */}
      <div
        className="about-us-content"
        style={{
          maxWidth: "900px",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          zIndex: 1,
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "15px" }}>About Us</h1>
        <h2 style={{ fontSize: "22px", fontWeight: "lighter", marginBottom: "20px", opacity: "0.9" }}>
          Trusted Forex Solutions in Delhi & NCR
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          7Travel Money is a Private Limited Company incorporated in 2019 and licensed by the Reserve Bank of India (RBI) as a Full-Fledged Money Changer (FFMC), authorized to carry out international currency exchange and money exchange activities.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          We are a proud subsidiary of{" "}
          <span
            onClick={() => window.open("https://7janpathforex.com/", "_blank")}
            style={{ color: "#00bfff", cursor: "pointer", textDecoration: "underline" }}
          >
            7Janpath Forex
          </span>
          , a trusted name in the foreign exchange industry.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          At 7Travel Money, our mission is to bridge the gap between money changers and international travelers by providing reliable, fast, and affordable forex services. Though we currently operate from Delhi, our services extend across multiple cities in India, offering convenient access to foreign exchange solutions.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          We provide a comprehensive suite of forex products including:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9", listStyle: "disc", marginLeft: "20px", textAlign: "left" }}>
          <li>Currency notes</li>
          <li>Prepaid travel cards</li>
          <li>Traveler’s cheques</li>
          <li>Demand drafts</li>
          <li>Wire transfers</li>
        </ul>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9", marginTop: "20px" }}>
          These services are tailored to suit various purposes such as:
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9", listStyle: "disc", marginLeft: "20px", textAlign: "left" }}>
          <li>Personal and business travel</li>
          <li>Overseas education</li>
          <li>Emigration and employment abroad</li>
          <li>Medical treatment overseas</li>
          <li>Maintenance of close relatives staying outside India</li>
        </ul>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9", marginTop: "20px" }}>
          Whether you need money exchange in Delhi or the broader NCR region, 7Travel Money ensures a seamless and cost-effective experience.
        </p>
      </div>

      {/* Smooth Fade-In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 400px) {
            .about-us-container {
              padding: 30px 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUsContent;
