"use client";
import { useState, useEffect } from "react";

const CurrencyExchange = () => {

    let cuurentCurrencyrate = 55;
    let commision = 0.2;
    const [citiesData, setCitiesData] = useState([]);
    const [currencyWantData, setCurrencyWantData] = useState([]);
    useEffect(() => {
    //     async function fetchPosts() {
    //       let res = await fetch(`${process.env.basePath}/cities`)
    //       let data = await res.json()
    //       setData(data)
    //     }
    //     fetchPosts()
    //   }, []);
        fetch(`${process.env.basePath}/cities`)
          .then((res) => res.json())
          .then((citiesData) => {
            setCitiesData(citiesData)
          })
          fetch(`${process.env.basePath}/settings/exchange-rates`)
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
        useramount: 0,
        vendoramount: 0

      });
    const handleChange = (event:any ) => {
        const {name, value} = event.target;
        setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
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
                        {currencyWantData.map((currency: any) => (
                                <option value={currency}>{currency.name} ({currency.symbol})</option>
                            ))}
                        </select>
                    </p>
                </div>
            
                <p className="book-order-input-box">
                    <select id="currencyNotes" name="currencyNotes" value={currencyExchangeForm.currencyNotes} onChange={handleChange}>
                        <option value="Forex Card">Forex Card</option>
                        <option value="Currency Notes">Currency Notes</option>
                    </select>
                </p>
                <p className="book-order-input-box">
                    <input name="useramount" value={currencyExchangeForm.useramount} onChange={handleChange} type="text" placeholder="Forex Amount"/>
                </p>
                <p className="book-order-input-box">
                    <input name="vendoramount" value={currencyExchangeForm.vendoramount} onChange={handleChange} type="text" placeholder="INR Amount"/>
                </p>
            
            <div className="total-book-order">
                <h2>Total Amount</h2>
                <h2>Rs. {(currencyExchangeForm.vendoramount) - (currencyExchangeForm.useramount * commision)}</h2>
            </div>
            <button className="book-btn-set" type="submit">Book This Order</button>
            </form>
        </div>
  </div> 
    )
};

export default CurrencyExchange;