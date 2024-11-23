"use client";
import { useState, useEffect } from "react";

const CurrencyExchange = () => {
    const [citiesData, setCitiesData] = useState([]);
    const [currencyWantData, setCurrencyWantData] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
    const [userAmount, setUserAmount] = useState('');
    const [vendorAmount, setVendorAmount] = useState('');
    const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
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
        userCurrency: "INR",
        requiredCurrency: "select currency",
        currencyNotes: "Currency Notes",
        userAmount: '',
        vendorAmount: '',
        name: '',
        email: '',
        mobile: '',
        address: ''
    });
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        // console.log('name', name);
        // console.log('value', value);
        
        setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
        if (name === 'requiredCurrency') {
            const currency = currencyWantData.find((data: any) => data.id == value);
            console.log(currency);
            if (currency) {
                setSelectedCurrency(currency);
            }
            if (currencyExchangeForm.userAmount) {
                const amount = (value * selectedCurrency?.buy_rate).toFixed(2);
                setVendorAmount(amount);
            }
        }
        if (name === 'userAmount') {
            setUserAmount(value);
            const amount = (value * selectedCurrency?.buy_rate).toFixed(2);
            setVendorAmount(amount);
            setCurrencyExchangeForm((prevFormData) => ({ ...prevFormData, ['userAmount']: value, ['vendorAmount']: amount }));
        }
    }

    const handlecurrencyExchnagePopup = (event: any) => {
        event.preventDefault();
        setIsCustomModalOpen(true);
    };
    
    const handlecurrencyExchnageSubmit = (event: any) => {
        event.preventDefault();
        const cityName:any = citiesData.find((city: any) => city.id == currencyExchangeForm.selectCity);
        const currentYouWant:any = currencyWantData.find((currency: any) => currency.id == currencyExchangeForm.requiredCurrency);
        fetch(`${process.env.basePath}/enquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": currencyExchangeForm.name,
                "email": currencyExchangeForm.email,
                "mobile": Number(currencyExchangeForm.mobile),
                "address": currencyExchangeForm.address,
                "city": cityName?.name,
                "currency_you_have": currencyExchangeForm.userCurrency,
                "currency_you_want": currentYouWant?.name,
                "currency_type": currencyExchangeForm.currencyNotes,
                "forex_amount": Number(currencyExchangeForm.userAmount),
                "total_amount": Number(currencyExchangeForm.vendorAmount),
                "forex_rate": Number(selectedCurrency?.buy_rate),
                "inr_amount": Number(currencyExchangeForm.vendorAmount),
                "request_type": "Buy",
                "status": 1,
                "created_at": new Date().toISOString(),
                "updated_at": new Date().toISOString()
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setIsCustomModalOpen(false);
            resetStates();
            alert('Order placed successfully');
        })
    };

    const resetStates = () => {
        setCurrencyExchangeForm({
            selectCity: "Select City",
            userCurrency: "INR",
            requiredCurrency: "select currency",
            currencyNotes: "Currency Notes",
            userAmount: '',
            vendorAmount: '',
            name: '',
            email: '',
            mobile: '',
            address: ''
        });
        setSelectedCurrency(null);
        setUserAmount('');
        setVendorAmount('');
    }


    return (
        <>
        <div className="book-order-search-box">
            <div className="book-order-tab-box">
                <form method="post" onSubmit={handlecurrencyExchnagePopup}>
                    <p className="book-order-input-box">
                        <select name="selectCity" id="selectCity" value={currencyExchangeForm.selectCity} onChange={handleChange} required>
                            <option value="">Select City</option>
                            {citiesData.map((city: any) => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </select>
                    </p>
                    <div className="book-order-input-box book-cus-inputset">
                        <p className="mb-0">
                            <label htmlFor="userCurrency">Currency You Have</label>
                            <select id="userCurrency" name="userCurrency" value={currencyExchangeForm.userCurrency} onChange={handleChange} required>
                                <option value="INR">INR</option>
                            </select>
                        </p>
                        <p className="mb-0">
                            <label htmlFor="requiredCurrency">Currency You Want</label>
                            <select id="requiredCurrency" name="requiredCurrency" value={currencyExchangeForm.requiredCurrency} onChange={handleChange} required>
                                <option value="">Select currency</option>
                                {currencyWantData.map((currency: any) => (
                                    <option key={currency.id} value={currency.id}>{currency.name} ({currency.symbol})</option>
                                ))}
                            </select>
                        </p>
                    </div>

                    <p className="book-order-input-box">
                        <select id="currencyNotes" name="currencyNotes" value={currencyExchangeForm.currencyNotes} onChange={handleChange} required>
                            <option value="Currency Notes">Currency Notes</option>
                        </select>
                    </p>
                    <p className="book-order-input-box">
                        <input name="userAmount" value={userAmount} onChange={handleChange} type="text" placeholder="Forex Amount" required />
                        {selectedCurrency?.buy_rate ? `Rate = Rs. ${selectedCurrency?.buy_rate}` : ''}
                    </p>
                    <p className="book-order-input-box">
                        <input name="vendorAmount" value={vendorAmount} onChange={handleChange} type="text" placeholder="INR Amount" readOnly />
                    </p>

                    <div className="total-book-order">
                        <h2>Total Amount</h2>
                        <h2>Rs. {vendorAmount}</h2>
                    </div>
                    <button className="book-btn-set" type="submit">Book This Order</button>
                </form>
            </div>
        </div>
        {/* Modal using bootstrap */}
        <div className={`book-order-modal modal fade ${isCustomModalOpen ? 'show d-block' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tab-index={-1} aria-labelledby="staticBackdropLabel" {...(isCustomModalOpen ? {"aria-modal":"true"} : {"aria-hidden": "true"})}>
            <div className="modal-dialog book-order-search-box">
                <div className="modal-content book-order-tab-box">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Continue with your order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsCustomModalOpen(false)}></button>
                    </div>
                    <form method="post" onSubmit={handlecurrencyExchnageSubmit}>
                        <div className="modal-body">
                            <p className="book-order-input-box">
                                <input type="text" id="Name" name="name" placeholder="Name" value={currencyExchangeForm.name} onChange={handleChange} required />
                            </p>
                            <p className="book-order-input-box">
                                <input type="text" id="Email" name="email" placeholder="Email" value={currencyExchangeForm.email} onChange={handleChange} required />
                            </p>
                            <p className="book-order-input-box">
                                <input type="text" id="Mobile" name="mobile" placeholder="Mobile" value={currencyExchangeForm.mobile} onChange={handleChange} required />
                            </p>
                            <p className="book-order-input-box">
                                <input type="text" id="Address" name="address" placeholder="Address" value={currencyExchangeForm.address} onChange={handleChange} required />
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default CurrencyExchange;