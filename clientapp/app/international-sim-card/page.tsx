"use client";
import HeadersComponent from '../components/headers/HeadersComponent';
import FooterComponent from '../components/footer/FooterComponent';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './internationalSim.scss';


// Define the types for the sim card data
interface SimCard {
    id: number;
    name: string;
    price: string;
    image: string;
}

const simCards: SimCard[] = [
    { id: 1, name: 'Global eSIM', price: 'Rs. 500.00', image: '/images/globalEsim.png' },
    { id: 2, name: 'Europe eSIM', price: 'Rs. 700.00', image: '/images/europeSim.png' }
];

// Define the type for country data
interface Country {
    cca3: string;
    name: {
        common: string;
    };
}

function InternationalSim() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setFilteredCountries(
                countries.filter(country =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredCountries([]);
        }
    }, [searchTerm, countries]);

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country.name.common);
        setSearchTerm(country.name.common);
        setFilteredCountries([]);
    };

    return (
        <>
            <HeadersComponent />
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
                <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Most Affordable eSIM / SIM for Travel
                    </h1>
                    <div className="relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-300 shadow-sm"
                            placeholder="Search for a country..."
                        />
                        {filteredCountries.length > 0 && (
                            <div className="absolute w-full bg-white shadow-lg mt-2 max-h-60 overflow-y-auto z-10 rounded-lg">
                                <ul className="max-h-60 overflow-y-auto">
                                    {filteredCountries.map((country) => (
                                        <li
                                            key={country.cca3}
                                            onClick={() => handleCountryClick(country)}
                                            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
                                        >
                                            {country.name.common}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="p-3 text-center button-container">
                        <button className="book-btn-set">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Sim Card Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">International SIM Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                    {simCards.map((sim) => (
                        <div key={sim.id} className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <img src={sim.image} alt={sim.name} className="w-full h-64 object-cover" />
                            <div className="pl-3">
                                <h3 className="text-xl font-semibold text-gray-800">{sim.name}</h3>
                                <p className="text-lg text-gray-600">from {sim.price}</p>
                            </div>
                            {/* Buy Now Button Below the Card */}
                            <div className="pl-1 pb-2 button-container">
                                <button className="book-btn-set">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterComponent />
        </>
    );
}

export default InternationalSim;