"use client";
import React from 'react';
import Select from 'react-select';
import countryOptions, { CountryOption } from '../../utils/countryCodes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CountryCodeSelector.scss';

interface CountryCodeSelectorProps {
  countrySelectCallback: (countryCode: string) => void;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({ countrySelectCallback }) => {
  const [selectedCountry, setSelectedCountry] = React.useState<CountryOption | null>({ value: '+91', label: 'India (+91)' });

  const handleCountryChange = (selectedOption: CountryOption | null) => {
    setSelectedCountry(selectedOption);
    if (selectedOption) {
      countrySelectCallback(selectedOption.value);
    }
  };

  return (
    <div className="country-code-select-container">
      <Select
        id="country-code"
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Country Code"
        isSearchable
        className="react-select-container"
      />
    </div>
  );
};

export default CountryCodeSelector;
