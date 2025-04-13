// import FooterComponent from "../components/footer/FooterComponent";
// import HeadersComponent from "../components/headers/HeadersComponent";

// const offers =  () =>{
//     return(
//         <div>
//           <HeadersComponent />
//           <div style={{height: '300px'}}>
//           <img className="under-maintenance" src="images/offer_april.jpeg" alt="under-maintenence" />
//           </div>
//           <FooterComponent />
//         </div>
//     )
// }
// export default offers;


import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeadersComponent />

      <div className="flex-grow flex items-center justify-center px-4 py-6">
        {/* Outer Tile */}
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-300 p-4">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-4">Ongoing Offers</h1>

          {/* Inner Offer Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <img
              src="images/offer_april.jpeg"
              alt="April Offer"
              className="w-full object-cover max-h-64"
            />
            <div className="p-3 text-center">
              <h2 className="text-base font-semibold text-gray-700">April Special Offer</h2>
              <p className="text-sm text-gray-500 mt-1">
                Grab limited-time deals available this April!
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Offers;
