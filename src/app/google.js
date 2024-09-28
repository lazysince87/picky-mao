"use client";
import React, { useState } from "react";

const myArr = ['chinese'];

const apiKey = "AIzaSyAI1aGvbPiIxDXZzzNaTEpb_3m0LXKljmw";

const PlaceSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    // Combine the query with the values in myArr
    const searchQuery = myArr.map(item => `${item} ${query}`).join('|');

    try {
      // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Securely get the API key
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${apiKey}"
      );

      const data = await response.json();

      if (data.status === "OK") {
        setResults(data.results); // Update the results state with the fetched data
        setError("");
      } else {
        setError(data.error);
        setResults([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Google Places Text Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a keyword..."
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {results.map((place) => (
          <li key={place.place_id}>
            <h3>{place.name}</h3>
            <p>{place.formatted_address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceSearch;