"use client";
import { useState, useEffect } from "react";

const CurrencyExchange = () => {
  let cuurentCurrencyrate = 55;
  let commision = 0.2;

  const [currencyExchangeForm, setCurrencyExchangeForm] = useState({
    selectCity: "Select City",
    userCurrency: "Select currency",
    requiredCurrency: "select currency",
    currencyNotes: "Currency Notes",
    useramount: 0,
    vendoramount: 0,
  });
  const [city, setCity] = useState(["Delhi", "Noida"]);
  const getCities = async () => {
    try {
      const response = await fetch("http://api.7travelmoney.com/city-lists");
      const data = await response.json();
      setCity((defaultData) => [...defaultData, ...data]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  useEffect(() => {
    getCities();
  }, []);

  const [currency, setCurrency] = useState(["US Dollar", "AUS Dollar"]);
  const getCurrencies = async () => {
    try {
      const response = await fetch("http://api.7travelmoney.com/city-lists");
      const fetchedCurrencies = await response.json();
      setCurrency((defaultData) => [...defaultData, ...fetchedCurrencies]);
      console.log(fetchedCurrencies);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  useEffect(() => {
    getCurrencies();
  }, []);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCurrencyExchangeForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlecurrencyExchnageSubmit = (event: any) => {
    event.preventDefault();
    console.log(`City: ${currencyExchangeForm.selectCity}, 
        User Currency: ${currencyExchangeForm.userCurrency}, 
        Required Currency: ${currencyExchangeForm.requiredCurrency}, 
        Notes: ${currencyExchangeForm.currencyNotes},
        User Amount: ${currencyExchangeForm.useramount},
        vendor Amount: ${currencyExchangeForm.vendoramount}`);
  };

  return (
    <div className="book-order-search-box">
      <div className="book-order-tab-box">
        <form onSubmit={handlecurrencyExchnageSubmit}>
          <p className="book-order-input-box">
            <select
              name="selectCity"
              id="selectCity"
              value={currencyExchangeForm.selectCity}
              onChange={handleChange}
            >
              <option value="Select City">Select City</option>
              {city.length &&
                city.map((e, ind) => (
                  <option key={ind} value={e}>
                    {e}
                  </option>
                ))}
            </select>
          </p>
          <div className="book-order-input-box book-cus-inputset">
            <p className="mb-0">
              <label>Currency You Have</label>
              <select
                id="userCurrency"
                name="userCurrency"
                value={currencyExchangeForm.userCurrency}
                onChange={handleChange}
              >
                <option value="default">Select currency</option>
                {currency.length &&
                  currency.map((e, ind) => (
                    <option key={ind} value={e}>
                      {e}
                    </option>
                  ))}
              </select>
            </p>
            <p className="mb-0">
              <label>Currency You Want</label>
              <select
                id="requiredCurrency"
                name="requiredCurrency"
                value={currencyExchangeForm.requiredCurrency}
                onChange={handleChange}
              >
                <option value="default">Select currency</option>
                <option value="US dollar">US dollar</option>
                <option value="AUS dollar">AUS dollar</option>
              </select>
            </p>
          </div>

          <p className="book-order-input-box">
            <select
              id="currencyNotes"
              name="currencyNotes"
              value={currencyExchangeForm.currencyNotes}
              onChange={handleChange}
            >
              <option value="Forex Card">Forex Card</option>
              <option value="Currency Notes">Currency Notes</option>
            </select>
          </p>
          <p className="book-order-input-box">
            <input
              name="useramount"
              value={currencyExchangeForm.useramount}
              onChange={handleChange}
              type="text"
              placeholder="Enter your amount"
            />
          </p>
          <p className="book-order-input-box">
            <input
              name="vendoramount"
              value={currencyExchangeForm.vendoramount}
              onChange={handleChange}
              type="text"
              placeholder="Amount"
            />
          </p>

          <div className="total-book-order">
            <h2>Total Amount</h2>
            <h2>
              Rs.{" "}
              {currencyExchangeForm.vendoramount -
                currencyExchangeForm.useramount * commision}
            </h2>
          </div>
          <button className="book-btn-set" type="submit">
            Book This Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurrencyExchange;
