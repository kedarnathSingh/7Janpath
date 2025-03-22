// import FooterComponent from "../components/footer/FooterComponent";
// import HeadersComponent from "../components/headers/HeadersComponent";
// import styles from "./Login.module.scss"; // Import the SCSS file

// const Login = () => {
//   // Sample user data
//   const user = {
//     name: "Ashutosh Singh",
//     email: "ashu@example.com",
//     phone: "+91 234 567 890",
//   };

//   // Sample list of inquiries
//   const inquiries = [
//     { id: 1, date: "2023-10-01", subject: "Product Inquiry", status: "Pending" },
//     { id: 2, date: "2023-09-25", subject: "Support Request", status: "Resolved" },
//     { id: 3, date: "2023-09-20", subject: "Billing Issue", status: "Closed" },
//   ];

//   return (
//     <div>
//       <HeadersComponent />
//       <div className={styles.loginContainer}>
//         {/* Main Content */}
//         <div className={styles.mainContent}>
//           {/* Profile Section */}
//           <div className={styles.profileSection}>
//             <h1>Profile</h1>

//             {/* Name */}
//             <div className={styles.profileField}>
//               <div className={styles.fieldInfo}>
//                 <p>Name</p>
//                 <p>{user.name}</p>
//               </div>
//               <button className={styles.editButton}>Edit</button>
//             </div>

//             {/* Email */}
//             <div className={styles.profileField}>
//               <div className={styles.fieldInfo}>
//                 <p>Email</p>
//                 <p>{user.email}</p>
//               </div>
//               <button className={styles.editButton}>Edit</button>
//             </div>

//             {/* Phone */}
//             <div className={styles.profileField}>
//               <div className={styles.fieldInfo}>
//                 <p>Phone</p>
//                 <p>{user.phone}</p>
//               </div>
//               <button className={styles.editButton}>Edit</button>
//             </div>
//           </div>

//           {/* Inquiries Section */}
//           <div className={styles.inquiriesSection}>
//             <h2>Your Inquiries</h2>

//             {inquiries.length > 0 ? (
//               <table className={styles.inquiriesTable}>
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Subject</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {inquiries.map((inquiry) => (
//                     <tr key={inquiry.id}>
//                       <td>{inquiry.date}</td>
//                       <td>{inquiry.subject}</td>
//                       <td>
//                         <span
//                           className={`${styles.statusBadge} ${inquiry.status === "Pending"
//                               ? styles.pending
//                               : inquiry.status === "Resolved"
//                                 ? styles.resolved
//                                 : styles.closed
//                             }`}
//                         >
//                           {inquiry.status}
//                         </span>
//                       </td>
//                       <td>
//                         <button className={styles.viewButton}>View</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p className={styles.noInquiries}>No inquiries found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <FooterComponent />
//     </div>
//   );
// };

// export default Login;








import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

const login = () => {
    return(
        <div>
        <HeadersComponent />
        <div style={{height: '360px'}}>
        <img className="under-maintenance" src="images/site-under-maintenance.png" alt="under-maintenence" />
        </div>
        <FooterComponent />
      </div>
    )
}

export default login;