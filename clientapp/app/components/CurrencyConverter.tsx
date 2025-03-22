// "use client";
// import React, { useState, useEffect } from "react";

// interface Currency {
//     id: string;
//     name: string;
//     symbol: string;
//     buy_rate: number;
//     sell_rate: number;
// }

// interface CurrencyConverterProps {
//     onClose: () => void;
// }

// const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onClose }) => {
//     const [currencies, setCurrencies] = useState<Currency[]>([]);
//     const [fromCurrency, setFromCurrency] = useState<string>("INR");
//     const [toCurrency, setToCurrency] = useState<string>("USD");
//     const [amount, setAmount] = useState<string>("1"); // To handle empty input properly
//     const [convertedAmount, setConvertedAmount] = useState<number>(0);
//     const [rateType, setRateType] = useState<"buy" | "sell">("buy");
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         setIsLoading(true);
//         setError(null);

//         fetch(`${process.env.basePath}/currencies`)
//             .then((res) => res.json())
//             .then((currencyData) => {
//                 if (!Array.isArray(currencyData)) throw new Error("Invalid currency data");
//                 setCurrencies(currencyData);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Failed to fetch currencies:", error);
//                 setError("Failed to load currencies. Please try again later.");
//                 setIsLoading(false);
//             });
//     }, []);

//     useEffect(() => {
//         if (!currencies.length || isNaN(Number(amount)) || Number(amount) <= 0) return;

//         const from = currencies.find((currency) => currency.name === fromCurrency);
//         const to = currencies.find((currency) => currency.name === toCurrency);

//         if (from && to) {
//             let rate = 1;

//             // Special handling when converting to/from INR
//             if (fromCurrency === "INR") {
//                 rate = 1 / to.buy_rate; // INR to another currency
//             } else if (toCurrency === "INR") {
//                 rate = from.buy_rate; // Another currency to INR
//             } else {
//                 // Standard conversion between two foreign currencies
//                 rate = rateType === "buy"
//                     ? to.buy_rate / from.buy_rate
//                     : to.sell_rate / from.sell_rate;
//             }

//             setConvertedAmount(Number(amount) * rate);
//         }
//     }, [amount, fromCurrency, toCurrency, rateType, currencies]);

//     if (isLoading) return <div className="text-center text-gray-600">Loading currencies...</div>;
//     if (error) return <div className="text-red-500 text-center">{error}</div>;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
//                 {/* Close Button */}
//                 <button
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
//                     onClick={onClose}
//                 >
//                     ✖
//                 </button>

//                 {/* Title */}
//                 <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//                     Currency Converter
//                 </h2>

//                 <div className="space-y-4">
//                     {/* Rate Type Selector */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Rate Type</label>
//                         <select
//                             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//                             value={rateType}
//                             onChange={(e) => setRateType(e.target.value as "buy" | "sell")}
//                         >
//                             <option value="buy">Buy Rate</option>
//                             <option value="sell">Sell Rate</option>
//                         </select>
//                     </div>

//                     {/* From Currency Selector */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">From Currency</label>
//                         <select
//                             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//                             value={fromCurrency}
//                             onChange={(e) => setFromCurrency(e.target.value)}
//                         >
//                             {currencies.map((currency) => (
//                                 <option key={currency.id} value={currency.name}>
//                                     {currency.name} ({currency.symbol})
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* To Currency Selector */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">To Currency</label>
//                         <select
//                             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//                             value={toCurrency}
//                             onChange={(e) => setToCurrency(e.target.value)}
//                         >
//                             {currencies.map((currency) => (
//                                 <option key={currency.id} value={currency.name}>
//                                     {currency.name} ({currency.symbol})
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Amount Input */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Amount</label>
//                         <input
//                             type="number"
//                             className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
//                             value={amount}
//                             onChange={(e) => {
//                                 const value = e.target.value;
//                                 if (/^\d*\.?\d*$/.test(value)) { // Allows only numbers & decimals
//                                     setAmount(value);
//                                 }
//                             }}
//                             min="0"
//                         />
//                         {Number(amount) <= 0 && <p className="text-red-500 text-sm mt-1">Enter a valid amount</p>}
//                     </div>

//                     {/* Converted Amount Display */}
//                     <div className="bg-gray-100 text-center p-3 rounded-lg mt-4">
//                         <h5 className="text-lg font-semibold text-gray-800">Converted Amount</h5>
//                         <p className="text-2xl font-bold text-blue-600">
//                             {convertedAmount.toFixed(2)} {toCurrency}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Close Button */}
//                 <div className="text-center mt-4">
//                     <button
//                         className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition"
//                         onClick={onClose}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CurrencyConverter;


"use client";
import React, { useState, useEffect } from "react";

interface Currency {
    id: string;
    name: string;
    symbol: string;
    buy_rate: number;
    sell_rate: number;
}

interface CurrencyConverterProps {
    onClose: () => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onClose }) => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [fromCurrency, setFromCurrency] = useState<string>("USD"); // Default: USD to INR
    const [amount, setAmount] = useState<string>("1"); // To handle empty input properly
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [rateType, setRateType] = useState<"buy" | "sell">("buy");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(`${process.env.basePath}/currencies`)
            .then((res) => res.json())
            .then((currencyData) => {
                if (!Array.isArray(currencyData)) throw new Error("Invalid currency data");
                setCurrencies(currencyData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch currencies:", error);
                setError("Failed to load currencies. Please try again later.");
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!currencies.length || isNaN(Number(amount)) || Number(amount) <= 0) return;

        const from = currencies.find((currency) => currency.name === fromCurrency);

        if (from) {
            // Convert from selected currency to INR
            const rate = rateType === "buy" ? from.buy_rate : from.sell_rate;
            setConvertedAmount(Number(amount) * rate);
        }
    }, [amount, fromCurrency, rateType, currencies]);

    if (isLoading) return <div className="text-center text-gray-600">Loading currencies...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
                    Currency Converter (To INR)
                </h2>

                <div className="space-y-4">
                    {/* Rate Type Selector */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rate Type</label>
                        <select
                            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
                            value={rateType}
                            onChange={(e) => setRateType(e.target.value as "buy" | "sell")}
                        >
                            <option value="buy">Buy Rate</option>
                            <option value="sell">Sell Rate</option>
                        </select>
                    </div>

                    {/* From Currency Selector */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">From Currency</label>
                        <select
                            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id} value={currency.name}>
                                    {currency.name} ({currency.symbol})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Amount Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            type="number"
                            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
                            value={amount}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*\.?\d*$/.test(value)) { // Allows only numbers & decimals
                                    setAmount(value);
                                }
                            }}
                            min="0"
                        />
                        {Number(amount) <= 0 && <p className="text-red-500 text-sm mt-1">Enter a valid amount</p>}
                    </div>

                    {/* Converted Amount Display */}
                    <div className="bg-gray-100 text-center p-3 rounded-lg mt-4">
                        <h5 className="text-lg font-semibold text-gray-800">Converted Amount</h5>
                        <p className="text-2xl font-bold text-blue-600">
                            {convertedAmount.toFixed(2)} INR
                        </p>
                    </div>
                </div>

                {/* Close Button */}
                <div className="text-center mt-4">
                    <button
                        className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
