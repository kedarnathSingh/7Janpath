// "use client";
// import React, { useState, useEffect } from "react";
// import Recaptcha from 'react-google-recaptcha';
// import CountryCodeSelector from './CountryCode/CountryCodeSelector';
// import BootstrapClient from "./BootstrapClient";

// const CurrencyExchange = () => {
//     const [citiesData, setCitiesData] = useState([]);
//     const [currencyWantData, setCurrencyWantData] = useState([]);
//     const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
//     const [userAmount, setUserAmount] = useState('');
//     const [vendorAmount, setVendorAmount] = useState('');
//     const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
//     const [isCaptchaVerified, setIsCaptchaVerified] = useState<string | null>();
//     const [selectedCountryCode, setSelectedCountryCode] = useState<any>('+91');
//     const [errors, setErrors] = useState<{ [key: string]: string }>({});
//     const [isFormValid, setIsFormValid] = useState(false);
//     const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

//     const styles = {
//         error: { color: 'red', paddingTop: '5px'}
//     }
//     useEffect(() => {
//         fetch(`${process.env.basePath}/cities`)
//             .then((res) => res.json())
//             .then((citiesData) => {
//                 setCitiesData(citiesData)
//             })
//         fetch(`${process.env.basePath}/currencies`)
//             .then((res) => res.json())
//             .then((currencyWantData) => {
//                 setCurrencyWantData(currencyWantData)
//                 const usd = currencyWantData.find((currency: any) => currency.name === 'USD');
//                 setSelectedCurrency(usd);
//             })
//     }, []);

//     const [currencyExchangeForm, setCurrencyExchangeForm] = useState({
//         selectCity: "Select City",
//         userCurrency: "INR",
//         requiredCurrency: "17",
//         currencyNotes: "Currency Notes",
//         userAmount: '',
//         vendorAmount: '',
//         name: '',
//         email: '',
//         mobile: '',
//         address: ''
//     });
//     const handleChange = (event: any) => {
//         const { name, value } = event.target;
//         if ((name === 'userAmount' || name === 'mobile') && isNaN(value)) {
//             return;
//         }

//         setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
//         if (name === 'requiredCurrency') {
//             const currency:any = currencyWantData.find((data: any) => data.id == value);

//             if (currency) {
//                 const amount = (Number(userAmount) * currency?.buy_rate).toFixed(2);
//                 setSelectedCurrency(currency);
//                 setVendorAmount(amount);
//             }
//         }
//         if (name === 'userAmount') {
//             setUserAmount(value);
//             const amount = (value * selectedCurrency?.buy_rate).toFixed(2);
//             setVendorAmount(amount);
//             setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, ['userAmount']: value, ['vendorAmount']: amount }));
//         }
//     }

//     const handlecurrencyExchnagePopup = (event: any) => {
//         event.preventDefault();
//         setIsCustomModalOpen(true);
//     };

//     const handlecurrencyExchnageSubmit = (event: any) => {
//         event.preventDefault();
//         validateForm();
//         if (!isCaptchaVerified || !isFormValid) {
//             return;
//         }
//         const cityName:any = citiesData.find((city: any) => city.id == currencyExchangeForm.selectCity);
//         const currentYouWant:any = currencyWantData.find((currency: any) => currency.id == currencyExchangeForm.requiredCurrency);
//         fetch(`${process.env.basePath}/enquiry`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "name": currencyExchangeForm.name,
//                 "email": currencyExchangeForm.email,
//                 "mobile": selectedCountryCode + Number(currencyExchangeForm.mobile),
//                 "address": currencyExchangeForm.address,
//                 "city": cityName?.name,
//                 "currency_you_have": currencyExchangeForm.userCurrency,
//                 "currency_you_want": currentYouWant?.name,
//                 "currency_type": currencyExchangeForm.currencyNotes,
//                 "forex_amount": Number(currencyExchangeForm.userAmount),
//                 "total_amount": Number(currencyExchangeForm.vendorAmount),
//                 "forex_rate": Number(selectedCurrency?.buy_rate),
//                 "inr_amount": Number(currencyExchangeForm.vendorAmount),
//                 "request_type": "Buy",
//                 "status": 1,
//                 "created_at": new Date().toISOString(),
//                 "updated_at": new Date().toISOString()
//             })
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setIsCustomModalOpen(false);
//             resetStates();
//             alert('Order placed successfully');
//         })
//     };

//     const validateForm = () => {
//         let errors: { [key: string]: string } = {};
//         const { name, email, mobile} = currencyExchangeForm;

//         if (!name) {
//             errors.name = 'Name is required.';
//         } else {
//             errors.name = '';
//         }

//         if (!email) {
//             errors.email = 'Email is required.';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             errors.email = 'Email is invalid.';
//         } else {
//             errors.email = '';
//         }

//         if (!mobile) {
//             errors.mobile = 'Mobile is required.';
//         } else if (mobile.length < 10) {
//             errors.mobile = 'Mobile must be at least 10 characters.';
//         } else {
//             errors.mobile = '';
//         }

//         setErrors(errors);
//         setIsFormValid(Object.keys(errors).length === 0);
//     };

//     const resetStates = () => {
//         setCurrencyExchangeForm({
//             selectCity: "Select City",
//             userCurrency: "INR",
//             requiredCurrency: "select currency",
//             currencyNotes: "Currency Notes",
//             userAmount: '',
//             vendorAmount: '',
//             name: '',
//             email: '',
//             mobile: '',
//             address: ''
//         });
//         setSelectedCurrency(null);
//         setUserAmount('');
//         setVendorAmount('');
//     }

//     const handleSelectCountryCode = (countryCode: string) => {
//         setSelectedCountryCode(countryCode);
//     };

//     const handleTabClick = (tab: 'buy' | 'sell') => {
//         setActiveTab(tab);
//         resetStates();
//     };

//     return (
//         <>
//         <div className="book-order-search-box">
//             <div className="book-order-tab-box">
//             <ul className="nav nav-tabs" id="myTab" role="tablist" >
//                     <li className="nav-item" role="presentation">
//                         <button
//                             className={`book-order-tab-heading ${activeTab === 'buy' ? 'active' : ''}`}
//                             id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true"
//                             onClick={() => handleTabClick('buy')}
//                         >
//                             Buy Forex Currency
//                         </button>
//                     </li>
//                     <li>
//                         <button
//                             className={`book-order-tab-heading ${activeTab === 'sell' ? 'active' : ''}`}
//                             id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false"
//                             onClick={() => handleTabClick('sell')}
//                         >
//                             Sell Forex Currency
//                         </button>
//                     </li>
//                 </ul>
//                 <form method="post" onSubmit={handlecurrencyExchnagePopup}>
//                     <p className="book-order-input-box">
//                         <select name="selectCity" id="selectCity" value={currencyExchangeForm.selectCity} onChange={handleChange} required>
//                             <option value="">Select City</option>
//                             {citiesData.map((city: any) => (
//                                 <option key={city.id} value={city.id}>{city.name}</option>
//                             ))}
//                         </select>
//                     </p>
//                     <div className="book-order-input-box book-cus-inputset">
//                         <p className="mb-0">
//                         <label htmlFor="userCurrency">
//                                 {activeTab === 'buy' ? 'Currency You Have' : 'Currency You Want'}
//                             </label>
//                             <select id="userCurrency" name="userCurrency" value={currencyExchangeForm.userCurrency} onChange={handleChange} required>
//                                 <option value="INR">INR</option>
//                             </select>
//                         </p>
//                         <p className="mb-0">
//                         <label htmlFor="requiredCurrency">
//                                 {activeTab === 'buy' ? 'Currency You Want' : 'Currency You Have'}
//                             </label>
//                             <select id="requiredCurrency" name="requiredCurrency" value={currencyExchangeForm.requiredCurrency} onChange={handleChange} required>
//                                 <option value="">Select currency</option>
//                                 {currencyWantData.map((currency: any) => (
//                                     <option key={currency.id} value={currency.id}>{currency.name} ({currency.symbol})</option>
//                                 ))}
//                             </select>
//                         </p>
//                     </div>

//                     <p className="book-order-input-box">
//                         <select id="currencyNotes" name="currencyNotes" value={currencyExchangeForm.currencyNotes} onChange={handleChange} required>
//                             <option value="Currency Notes">Currency Notes</option>
//                         </select>
//                     </p>
//                     <p className="book-order-input-box">
//                         <input name="userAmount" value={userAmount} onChange={handleChange} type="text" placeholder={activeTab === 'buy' ? 'Forex Amount' : 'INR Amount' } required />
//                         {selectedCurrency?.buy_rate && activeTab === 'buy'
//                             ? `Rate = Rs. ${selectedCurrency?.buy_rate}`
//                             : ''}
//                     </p>
//                     <p className="book-order-input-box">
//                         <input name="vendorAmount" value={vendorAmount} onChange={handleChange} type="text" placeholder={activeTab === 'buy' ? 'INR Amount' : 'Forex Amount'} readOnly />
//                     </p>

//                     <div className="total-book-order">
//                         <h2>Total Amount</h2>
//                         <h2>Rs. {vendorAmount}</h2>
//                     </div>
//                     <div className="flex justify-content">
//                     <button className="book-btn-set" type="submit">{activeTab === 'buy' ? 'Book Buy Order' : 'Book Sell Order'}</button>
//                     <i className="bi bi-exclamation-triangle m-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
//   <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
//   <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
// </svg></i>
//                     </div>
//                 </form>

//             </div>
//         </div>
//         {/* Modal using bootstrap */}
//         <div className={`book-order-modal modal fade ${isCustomModalOpen ? 'show d-block' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tab-index={-1} aria-labelledby="staticBackdropLabel" {...(isCustomModalOpen ? {"aria-modal":"true"} : {"aria-hidden": "true"})}>
//             <div className="modal-dialog book-order-search-box">
//                 <div className="modal-content book-order-tab-box">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="staticBackdropLabel">Continue with your order</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsCustomModalOpen(false)}></button>
//                     </div>
//                     <form method="post" onSubmit={handlecurrencyExchnageSubmit}>
//                         <div className="modal-body">
//                             <div className="book-order-input-box">
//                                 <input type="text" id="Name" name="name" placeholder="Name" value={currencyExchangeForm.name} onChange={handleChange} required />
//                                 {errors.name && <p style={styles.error}>{errors.name}</p>}
//                             </div>
//                             <div className="book-order-input-box">
//                                 <input type="email" id="Email" name="email" placeholder="Email" value={currencyExchangeForm.email} onChange={handleChange} required />
//                                 {errors.email && <p style={styles.error}>{errors.email}</p>}
//                             </div>
//                             <div className="book-order-input-box book-cus-inputset">
//                                 <div className="mb-0">
//                                     <CountryCodeSelector
//                                         countrySelectCallback={(countryCode) => handleSelectCountryCode(countryCode)}
//                                     />
//                                 </div>
//                                 <div className="mb-0">
//                                     <input type="text" id="Mobile" name="mobile" maxLength={10} minLength={10} placeholder="Mobile" value={currencyExchangeForm.mobile} onChange={handleChange} required />
//                                     {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
//                                 </div>
//                             </div>
//                             <div className="book-order-input-box">
//                                 <textarea name="address" id="Address" minLength={10} rows={3} maxLength={1000} placeholder="Address" value={currencyExchangeForm.address} onChange={handleChange} required></textarea>
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             {process.env.captchaSiteKey &&
//                                 (<div className="my-4">
//                                     <Recaptcha sitekey={process.env.captchaSiteKey} onChange={setIsCaptchaVerified} />
//                                 </div>)
//                             }
//                             <button type="submit" className="btn btn-primary">Continue</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         {isCustomModalOpen && <div className="modal-backdrop fade show"></div>}
//         </>
//     )
// };

// export default CurrencyExchange;

"use client";
import React, { useState, useEffect, useCallback, use } from "react";
import Recaptcha from "react-google-recaptcha";
import CountryCodeSelector from "./CountryCode/CountryCodeSelector";
import { useNavigate } from "react-router-dom";

const CurrencyExchange = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [currencyWantData, setCurrencyWantData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  const [userAmount, setUserAmount] = useState("");
  const [vendorAmount, setVendorAmount] = useState("");
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<string | null>();
  const [selectedCountryCode, setSelectedCountryCode] = useState<any>("+91");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFirstForm, setIsFirstForm] = useState(false);
  const [orderSummary, setOrderSummary] = useState<{
    inr_amount?: number;
    service_charge?: number;
    gst?: number;
    total_amount?: number;
  }>({});

  const [currencyExchangeForm, setCurrencyExchangeForm] = useState({
    selectCity: "",
    userCurrency: "INR",
    requiredCurrency: "17",
    currencyNotes: "Currency Notes",
    userAmount: "",
    vendorAmount: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const styles = {
    error: { color: "red", paddingTop: "5px" },
  };
  useEffect(() => {
    fetch(`${process.env.basePath}/cities`)
      .then((res) => res.json())
      .then((citiesData) => {
        setCitiesData(citiesData);
      });
    fetch(`${process.env.basePath}/currencies`)
      .then((res) => res.json())
      .then((currencyWantData) => {
        setCurrencyWantData(currencyWantData);
        const usd = currencyWantData.find(
          (currency: any) => currency.name === "USD"
        );
        setSelectedCurrency(usd);
      });
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if ((name === "userAmount" || name === "mobile") && isNaN(value)) {
      return;
    }

    setCurrencyExchangeForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "requiredCurrency") {
      const currency: any = currencyWantData.find(
        (data: any) => data.id == value
      );

      if (currency) {
        const amount = (Number(userAmount) * currency?.buy_rate).toFixed(2);
        setSelectedCurrency(currency);
        setVendorAmount(amount);
      }
    }
    if (name === "userAmount") {
      setUserAmount(value);
      const amount = (value * selectedCurrency?.buy_rate).toFixed(2);
      setVendorAmount(amount);
      setCurrencyExchangeForm((prevFormData) => ({
        ...prevFormData,
        ["userAmount"]: value,
        ["vendorAmount"]: amount,
      }));
    }
  };

  // const handlecurrencyExchnagePopup = (event: any) => {
  //     event.preventDefault();
  //     setIsFirstForm(true);

  //     const isValid = validateForm(true);

  //     if (!isValid) {
  //         return;
  //     }
  //     setIsCustomModalOpen(true);
  //     setIsFirstForm(false);
  // };

  const handlecurrencyExchnagePopup = (event: any) => {
    event.preventDefault();
    setIsFirstForm(true);

    const isValid = validateForm(true);

    if (!isValid) {
      return;
    }
    setIsCustomModalOpen(true);
    setIsFirstForm(false);
    fetch(`${process.env.basePath}/enquiry/order-summery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inr_amount: Number(vendorAmount),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderSummary(data);
        setIsCustomModalOpen(true);
      });
  };

  const handlecurrencyExchnageSubmit = (event: any) => {
    event.preventDefault();
    validateForm();
    if (!isFormValid) {
      return;
    }
    // if (!isCaptchaVerified) {
    //     alert('Please verify the captcha');
    //     return;
    // }
    const cityName: any = citiesData.find(
      (city: any) => city.id == currencyExchangeForm.selectCity
    );
    const currentYouWant: any = currencyWantData.find(
      (currency: any) => currency.id == currencyExchangeForm.requiredCurrency
    );
    const mobileNumber = parseInt(`${selectedCountryCode}${currencyExchangeForm.mobile}`, 10);
  if (isNaN(mobileNumber)) {
    alert("Invalid mobile number");
    return;
  }
    fetch(`${process.env.basePath}/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: currencyExchangeForm.name,
        email: currencyExchangeForm.email,
        // mobile: selectedCountryCode + Number(currencyExchangeForm.mobile),
        mobile: mobileNumber,
        address: currencyExchangeForm.address,
        city: cityName?.name,
        currency_you_have: currencyExchangeForm.userCurrency,
        currency_you_want: currentYouWant?.name,
        currency_type: currencyExchangeForm.currencyNotes,
        forex_amount: Number(currencyExchangeForm.userAmount),
        total_amount: Number(currencyExchangeForm.vendorAmount),
        forex_rate: Number(selectedCurrency?.buy_rate),
        inr_amount: Number(currencyExchangeForm.vendorAmount),
        service_charge: orderSummary.service_charge || 0, // Ensure this is included
    gst: orderSummary.gst || 0,
        request_type: "Buy",
        status: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsCustomModalOpen(false);
        resetStates();
        alert("Order placed successfully");
      });
  };

  const validateForm = useCallback(
    (firstForm = false) => {
      let errors: { [key: string]: string } = {};
      const { name, email, mobile, selectCity, userAmount } =
        currencyExchangeForm;
      let isFirstFormValid = true;

      const errorsObj = errors;

      if (!firstForm) {
        if (!name) {
          errorsObj.name = "Name is required.";
        } else {
          delete errorsObj.name;
        }

        if (!email) {
          errorsObj.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errorsObj.email = "Email is invalid.";
        } else {
          delete errorsObj.email;
        }

        if (!mobile) {
          errorsObj.mobile = "Mobile is required.";
        } else if (mobile.length < 10) {
          errorsObj.mobile = "Mobile must be at least 10 characters.";
        } else {
          delete errorsObj.mobile;
        }
      } else {
        if (!selectCity) {
          errorsObj.selectCity = "selectCity is required.";
          isFirstFormValid = false;
        } else {
          delete errorsObj.selectCity;
          isFirstFormValid = true;
        }
        if (!userAmount) {
          errorsObj.userAmount = "selectCity is required.";
          isFirstFormValid = false;
        } else {
          delete errorsObj.userAmount;
          isFirstFormValid = true;
        }
      }

      setErrors(errorsObj);
      const isValid = Object.keys(errorsObj).length === 0;
      setIsFormValid(isValid);
      return isFirstFormValid;
    },
    [currencyExchangeForm]
  );

  const resetStates = () => {
    setCurrencyExchangeForm({
      selectCity: "",
      userCurrency: "INR",
      requiredCurrency: "select currency",
      currencyNotes: "Currency Notes",
      userAmount: "",
      vendorAmount: "",
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
    setSelectedCurrency(null);
    setUserAmount("");
    setVendorAmount("");
  };

  const handleSelectCountryCode = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
  };

  useEffect(() => {
    if (isFirstForm) {
      validateForm(true);
    }
  }, [currencyExchangeForm, isFirstForm, validateForm]);

  return (
    <>
      <div className="book-order-search-box">
        <div className="book-order-tab-box">
          <button className="book-order-tab-heading">Buy Forex Currency</button>
          <form method="post" onSubmit={handlecurrencyExchnagePopup}>
            <p className="book-order-input-box">
              <select
                name="selectCity"
                id="selectCity"
                value={currencyExchangeForm.selectCity}
                className={errors.selectCity ? "border border-danger" : ""}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {citiesData.map((city: any) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </p>
            <div className="book-order-input-box book-cus-inputset">
              <p className="mb-0">
                <label htmlFor="userCurrency">Currency You Have</label>
                <select
                  id="userCurrency"
                  name="userCurrency"
                  value={currencyExchangeForm.userCurrency}
                  onChange={handleChange}
                >
                  <option value="INR">INR</option>
                </select>
              </p>
              <p className="mb-0">
                <label htmlFor="requiredCurrency">Currency You Want</label>
                <select
                  id="requiredCurrency"
                  name="requiredCurrency"
                  value={currencyExchangeForm.requiredCurrency}
                  onChange={handleChange}
                >
                  <option value="">Select currency</option>
                  {currencyWantData.map((currency: any) => (
                    <option key={currency.id} value={currency.id}>
                      {currency.name} ({currency.symbol})
                    </option>
                  ))}
                </select>
              </p>
            </div>

            <p className="book-order-input">
              <select
                id="currencyNotes"
                name="currencyNotes"
                value={currencyExchangeForm.currencyNotes}
                onChange={handleChange}
              >
                <option value="Currency Notes">Currency Notes</option>
              </select>
            </p>
            <p className="book-order-input-box">
              <input
                name="userAmount"
                value={userAmount}
                onChange={handleChange}
                type="text"
                placeholder="Forex Amount"
                className={errors.userAmount ? "border border-danger" : ""}
              />
              {selectedCurrency?.buy_rate
                ? `Rate = Rs. ${selectedCurrency?.buy_rate}`
                : ""}
            </p>
            <p className="book-order-input-box">
              <input
                name="vendorAmount"
                value={vendorAmount}
                onChange={handleChange}
                type="text"
                placeholder="INR Amount"
                readOnly
              />
            </p>

            <div className="total-book-order">
              <h2>Total Amount</h2>
              <h2>Rs. {vendorAmount}</h2>
            </div>
            <button className="book-btn-set" type="submit">
              Book This Order
            </button>
          </form>
        </div>
      </div>
      {/* Modal using bootstrap */}
      <div
        className={`modal fade bd-example-modal-xl ${
          isCustomModalOpen ? "show d-block" : ""
        }`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tab-index={-1}
        aria-labelledby="myLargeModalLabel"
        {...(isCustomModalOpen
          ? { "aria-modal": "true" }
          : { "aria-hidden": "true" })}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content book-order-tab-box">
            <div className="modal-header">
              <h5>Order Summary</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsCustomModalOpen(false)}
              ></button>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">Product</th>
                    <th scope="col">Forex Amount</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Amount of Currency Exchanged(INR)</th>
                    <th scope="col">Service Charge+Gst</th>
                    <th scope="col">GST(Slabwise)</th>
                    <th scope="col">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {
                        currencyWantData.find(
                          (currency: any) =>
                            currency.id == currencyExchangeForm.requiredCurrency
                        )?.name
                      }
                    </td>
                    <td>Currency</td>
                    <td>{currencyExchangeForm.userAmount}</td>
                    <td>
                      {selectedCurrency?.buy_rate
                        ? `${selectedCurrency?.buy_rate}`
                        : ""}
                    </td>
                    <td>{orderSummary.inr_amount}</td>
                    <td>{orderSummary.service_charge}</td>
                    <td>{orderSummary.gst}</td>
                    <td>
                      {new Intl.NumberFormat("en-IN").format(
                        Math.round(orderSummary.total_amount)
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Continue with your order
              </h5>
            </div>
            <form method="post" onSubmit={handlecurrencyExchnageSubmit}>
              <div className="modal-body">
                <div className="d-flex justify-content-between align-items-start book-order-input-group">
                  <div className="book-order-input-box me-2 flex-grow-1">
                    <input
                      type="text"
                      id="Name"
                      name="name"
                      placeholder="Name"
                      value={currencyExchangeForm.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                  </div>
                  <div className="book-order-input-box ms-2 flex-grow-1">
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      value={currencyExchangeForm.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                  </div>
                </div>

                <div className="book-order-input-box book-cus-inputset">
                  <div className="mb-0">
                    <CountryCodeSelector
                      countrySelectCallback={(countryCode) =>
                        handleSelectCountryCode(countryCode)
                      }
                    />
                  </div>
                  <div className="mb-0">
                    <input
                      type="text"
                      id="Mobile"
                      name="mobile"
                      maxLength={10}
                      minLength={10}
                      placeholder="Mobile"
                      value={currencyExchangeForm.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <p style={styles.error}>{errors.mobile}</p>
                    )}
                  </div>
                </div>
                <div className="book-order-input-box">
                  <input
                    type="text"
                    name="address"
                    id="Address"
                    placeholder="Address"
                    value={currencyExchangeForm.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                {process.env.captchaSiteKey && (
                  <div className="my-4">
                    <Recaptcha
                      sitekey={process.env.captchaSiteKey}
                      onChange={setIsCaptchaVerified}
                    />
                  </div>
                )}
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isCustomModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default CurrencyExchange;
