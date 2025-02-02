import React from 'react'
import { useState } from "react";
import CurrencyExchange from './currencyExchange';
import CurrencyExchange1 from './currencyExchange1';

const ButtonParent = () => {
    const [activeComponent, setActiveComponent] = useState<"buy" | "sell">("buy");
    const handleBuyClick = () => {
      setActiveComponent("buy");
    };
    const handleSellClick = () => {
        setActiveComponent("sell");
      };
  return (
    <div>
        <div>
          {/* Button Controls */}
          <div className="component-container">
          <div className="button-group p-2 m-2 d-flex justify-content-end">
            <button
              onClick={handleBuyClick}
              className={`btn ${
                activeComponent === "buy" ? "btn-primary" : "btn-secondary"
              }`}
            >
              Buy Forex
            </button>
            <button
              onClick={handleSellClick}
              className={`btn ${
                activeComponent === "sell" ? "btn-primary" : "btn-secondary"
              }`}
            >
              Sell Forex
            </button>
          </div>
            {activeComponent === "buy" ? (
              <CurrencyExchange />
            ) : (
              <CurrencyExchange1 />
            )}
          </div>
        </div>
    </div>
  )
}

export default ButtonParent