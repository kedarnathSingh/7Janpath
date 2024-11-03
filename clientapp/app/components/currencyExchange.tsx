"use client";
import { useState, useEffect } from "react";

const CurrencyExchange = () => {
    const [citiesData, setCitiesData] = useState([]);
    const [currencyWantData, setCurrencyWantData] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState();
    const [userAmount, setUserAmount] = useState();
    const [vendorAmount, setVendorAmount] = useState();
    useEffect(() => {
        fetch(`${process.env.basePath}/cities`)
          .then((res) => res.json())
          .then((citiesData) => {
            setCitiesData(citiesData)
          })
          fetch(`${process.env.basePath}/currencies`)
          .then((res) => res.json())
          .then((currencyWantData) => {
            setCurrencyWantData(currencyWantData)
          })
      }, []);

    const [currencyExchangeForm, setCurrencyExchangeForm] = useState({  
        selectCity: "Select City", 
        userCurrency: "Select currency",
        requiredCurrency: "select currency",
        currencyNotes: "Currency Notes",
        useramount: '',
        vendoramount: ''

      });
    const handleChange = (event:any ) => {
        const {name, value} = event.target;
        setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
        if(name === 'requiredCurrency') {
           const currency = currencyWantData.find((data: any) => data.id == event.target.value);
            setSelectedCurrency(currency);
           if(currencyExchangeForm.useramount) {
                const amount = (event.target.value * selectedCurrency?.buy_rate).toFixed(2);
                setVendorAmount(amount); 
           }       
        }
        if(name === 'useramount') {
            const amount = (event.target.value * selectedCurrency?.buy_rate).toFixed(2);
            setVendorAmount(amount);        
        }
    } 

    const handlecurrencyExchnageSubmit = (event: any) => {
        event.preventDefault();
        console.log(`City: ${currencyExchangeForm.selectCity}, 
        User Currency: ${currencyExchangeForm.userCurrency}, 
        Required Currency: ${currencyExchangeForm.requiredCurrency}, 
        Notes: ${currencyExchangeForm.currencyNotes},
        User Amount: ${currencyExchangeForm.useramount},
        vendor Amount: ${currencyExchangeForm.vendoramount}`
        );
        console.log(process.env.basePath);
    };
  

    return(
        <div className="book-order-search-box">
        <div className="book-order-tab-box">
            <form onSubmit={handlecurrencyExchnageSubmit}>
                <p className="book-order-input-box">
                        <select name="selectCity" id="selectCity" value={currencyExchangeForm.selectCity} onChange={handleChange}>
                            <option value="Select City">Select City</option>
                            {citiesData.map((city: any) => (
                                <option value={city.id}>{city.name}</option>
                            ))}
                        </select>
                </p>
                <div className="book-order-input-box book-cus-inputset">
                    <p className="mb-0">
                        <label>Currency You Have</label>
                        <select id="userCurrency" name="userCurrency" value={currencyExchangeForm.userCurrency} onChange={handleChange} >
                            <option value="INR">INR</option>
                        </select>
                    </p>
                    <p className="mb-0">
                        <label>Currency You Want</label>
                        <select id="requiredCurrency" name="requiredCurrency" value={currencyExchangeForm.requiredCurrency} onChange={handleChange}>
                        <option value="default">Select currency</option>
<<<<<<< HEAD
                        {currencyWantData && currencyWantData.map((currency: any) => (
                                <option value={currency}>{currency.name} ({currency.symbol})</option>
=======
                        {currencyWantData.map((currency: any) => (
                                <option value={currency.id}>{currency.name} ({currency.symbol})</option>
>>>>>>> 488172cf76524be2de783334b459ef6530c537f7
                            ))}
                        </select>
                    </p>
                </div>
            
                <p className="book-order-input-box">
                    <select id="currencyNotes" name="currencyNotes" value={currencyExchangeForm.currencyNotes} onChange={handleChange}>
                        <option value="Currency Notes">Currency Notes</option>
                    </select>
                </p>
                <p className="book-order-input-box">
                    <input name="useramount" value={currencyExchangeForm.useramount} onChange={handleChange} type="text" placeholder="Forex Amount"/>
                    {selectedCurrency?.buy_rate ? `Rate = Rs. ${selectedCurrency?.buy_rate}` : '' }
                </p>
                <p className="book-order-input-box">
                    <input name="vendoramount" value={vendorAmount} onChange={handleChange} type="text" placeholder="INR Amount" readOnly />
                </p>
            
            <div className="total-book-order">
                <h2>Total Amount</h2>
                <h2>Rs. {vendorAmount}</h2>
            </div>
            <button className="book-btn-set" type="submit">Book This Order</button>
            </form>
        </div>
  </div> 
    )
};

export default CurrencyExchange;