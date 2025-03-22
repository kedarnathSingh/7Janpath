"use client";
import HeadersComponent from "../components/headers/HeadersComponent";
import FooterComponent from "../components/footer/FooterComponent";
import { useState, useEffect } from "react";
import './insurance.scss';

interface Country {
  id: number;
  name: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

const Insurance = () => {
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [numTravelers, setNumTravelers] = useState<number>(1);
  const [travelersAges, setTravelersAges] = useState<string[]>([""]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const filter = {
          offset: 0,
          limit: 100,
          skip: 0,
          order: "name ASC",
          where: {},
          fields: { id: true, name: true, status: true, created_at: true, updated_at: true },
        };

        const filterString = encodeURIComponent(JSON.stringify(filter));
        const response = await fetch(`http://localhost:3000/countries?filter=${filterString}`, {
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch countries: ${response.statusText}`);
        }

        const data: Country[] = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleNumTravelersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value, 10);
    if (isNaN(num) || num < 1) {
      setNumTravelers(1);
      setTravelersAges([""]);
      return;
    }
    setNumTravelers(num);
    setTravelersAges(Array(num).fill(""));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const message = `Country: ${country}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nNumber of Travelers: ${numTravelers}\nAges: ${travelersAges.join(", ")}`;

    const requestBody = {
      name,
      email,
      mobile: Number(mobile),
      inquiry_type: "Travel Insurance",
      location: country,
      message,
      status: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    try {
      const response = await fetch("http://localhost:3000/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit inquiry: ${response.statusText}`);
      }

      alert("Inquiry submitted successfully!");
      
      // Reset the form fields
      setName("");
      setMobile("");
      setEmail("");
      setCountry("");
      setStartDate("");
      setEndDate("");
      setNumTravelers(1);
      setTravelersAges([""]);
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : "An unknown error occurred"}`);
    }
  };

  return (
    <div>
      <HeadersComponent />
      <div className="travel-insurance-section">
        <h2>Travel Insurance</h2>
        {loading ? (
          <p>Loading countries...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number:</label>
              <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                <option value="">Select a country</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="numTravelers">Number of Travelers:</label>
              <input type="number" id="numTravelers" value={numTravelers} onChange={handleNumTravelersChange} min="1" required />
            </div>
            {travelersAges.map((age, index) => (
              <div key={index}>
                <label htmlFor={`age${index + 1}`}>Traveler {index + 1} Age:</label>
                <input type="number" id={`age${index + 1}`} value={age} onChange={(e) => {
                  const newAges = [...travelersAges];
                  newAges[index] = e.target.value;
                  setTravelersAges(newAges);
                }} min="0" required />
              </div>
            ))}
            <button type="submit">Get Quote</button>
          </form>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Insurance;
