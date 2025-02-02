"use client";
import React, { useState, useEffect, useCallback } from "react";
import CountryCodeSelector from "./CountryCode/CountryCodeSelector";
import { useNavigate } from "react-router-dom";
import MathCaptcha from "./MathCaptcha";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const CurrencyExchange = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [currencyWantData, setCurrencyWantData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  const [userAmount, setUserAmount] = useState("");
  const [vendorAmount, setVendorAmount] = useState("");
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
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

  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);

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

    if (!isCaptchaValid) {
      toast.error("Please solve the captcha correctly."); // Replace alert with toast
      return;
    }

    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    const cityName: any = citiesData.find(
      (city: any) => city.id == currencyExchangeForm.selectCity
    );
    const currentYouWant: any = currencyWantData.find(
      (currency: any) => currency.id == currencyExchangeForm.requiredCurrency
    );
    const mobileNumber = parseInt(`${currencyExchangeForm.mobile}`, 10);
    if (isNaN(mobileNumber)) {
      toast.error("Invalid mobile number"); // Replace alert with toast
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
        mobile: mobileNumber,
        address: currencyExchangeForm.address,
        city: cityName?.name || "Unknown City",
        currency_you_have: currencyExchangeForm.userCurrency,
        currency_you_want: currentYouWant?.name || "Unknown Currency",
        currency_type: currencyExchangeForm.currencyNotes,
        forex_amount: Number(currencyExchangeForm.userAmount) || 0,
        total_amount: Number(currencyExchangeForm.vendorAmount) || 0,
        forex_rate: Number(selectedCurrency?.buy_rate) || 0,
        inr_amount: Number(currencyExchangeForm.vendorAmount) || 0,
        service_charge: Number(orderSummary.service_charge || 0),
        gst: Number(orderSummary.gst || 0),
        request_type: "Buy",
        status: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }),
    })
      .then(async (res) => {
        const responseData = await res.json();
        if (!res.ok) {
          throw new Error(`API Error (${res.status}): ${responseData.message}`);
        }
        return responseData;
      })
      .then((data) => {
        setIsCustomModalOpen(false);
        resetStates();
        toast.success("Order placed successfully!"); // Replace alert with toast
      })
      .catch((error) => {
        toast.error(`Failed to place order: ${error.message}`); // Replace alert with toast
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
      {/* <div className="book-order-search-box">
        <div className="book-order-tab-box"> */}
          {/* <button className="book-order-tab-heading">Buy Forex Currency</button> */}
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
        {/* </div>
      </div> */}

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
                        Math.round(orderSummary.total_amount || 0)
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
                <div className="book-order-input-box">
                  <MathCaptcha onCaptchaVerified={setIsCaptchaValid} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isCustomModalOpen && <div className="modal-backdrop fade show"></div>}
      <ToastContainer />
    </>
  );
};

export default CurrencyExchange;
