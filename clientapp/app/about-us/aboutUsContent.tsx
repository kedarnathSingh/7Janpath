// "use client";
// import React from "react"
// import { useEffect, useState } from "react";

// const aboutUsContent = () => {
//   const [data, setPageData] = useState([]);
//   let updatedData: any;
//   useEffect (() => {
//     fetch(`${process.env.basePath}/settings/about_us`)
//     .then((res) => res.json())
//     .then((data) => {
//       setPageData(data)
//     })
// }, []);

//   return(
//     <div>
//       {/* {data.map((val: any) => (
//           {val.title}
//       ))} */}
//       hiii
//   </div>
    
//   )
// }

// export default aboutUsContent;


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
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
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
          Money Exchange Service in Delhi & NCR
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          7travel money is a Private Limited Company incorporated in the Year 2019 and has been licensed by the Reserve Bank of India (RBI) as a Full Fledged Money Changer (FFMC) to carry out International Currency Exchange / Money Exchange Activities.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          We aim to bridge the gap between Money changers and International Travelers. We Provide Currency Exchange in different cities of India. We are currently operating from Delhi.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          We offer a full suite of forex products consisting of currency notes, prepaid travel cards, traveler's cheques, demand drafts, and wire transfers in an inexpensive and convenient way. We offer Money Exchange in Delhi & NCR.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          Customers can buy forex for several purposes such as Personal Travel, Business Travel, Education, Emigration, Employment, Medical, and Maintenance of close relatives staying abroad.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", opacity: "0.9" }}>
          Read our FAQs to learn more about how to book your order and other foreign exchange-related queries.
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
        `}
      </style>
    </div>
  );
};

export default AboutUsContent;
