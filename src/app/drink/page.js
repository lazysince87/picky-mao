'use client'
import { useState } from 'react';
import axios from 'axios';
import '../pages.css'

export default function DrinkPage({ filterChoices }) {
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('../api/findRes/router.js', filterChoices, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResults(response.data);
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  return (
    <div className='body'>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        {/* Other inputs or selections can go here */}
        <button className='submit' type="submit">Find Drink</button>
      </form>

      <div>
        <h2>Results:</h2>
        <ul>
          {results.map((drink) => (
            <li key={drink.name}>{drink.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}




/*
'use client'
import {useState, useEffect} from 'react'

export default function DrinkPage() {

    const handleSubmit = async(event) => {
    const drinkFilterWords = [
        {
        drinkTemp: '', //user choice --string
        nowOrLater: '' //user choice --string
        },
    ]
    }
    
      return (
        <div>
          <button className='submit' onClick={handleSubmit}></button>
        </div>
      );
  }
*/