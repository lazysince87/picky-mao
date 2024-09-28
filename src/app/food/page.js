"use client"
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/add", {  // Change to correct URL
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, country }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setName(""); // Reset form fields
        setAge("");
        setCountry("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((items) => setData(items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <div className="input-area">
        <h2>Add More Data</h2>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <div className="input-1">
              <span>Add Name</span>
              <input
                value={name}
                placeholder="Enter Person Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-2">
              <span>Add Age</span>
              <input
                type="number"
                value={age}
                placeholder="Enter Age..."
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="input-3">
              <span>Add Country</span>
              <input
                value={country}
                placeholder="Enter Country..."
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;


// 'use client'
// import {useState, useEffect} from 'react'

// /*
// export default function FoodPage() {
// */
//     function App() {
//         const [type, setType] = useState("");
      
//         const [data, setData] = useState([]);
      
//         const handleSubmit = (event) => {
//           event.preventDefault();
//           fetch("http://localhost:3000/", {
//             method: "PUT", // or 'PUT'
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({type}),
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               setData(data);
//             })
//             .catch((error) => {
//               console.error("Error:", error);
//             });
//         };
      
//         useEffect(() => {
//           fetch("http://localhost:3000/add")
//             .then((response) => response.json())
//             .then((item) => setData(item));
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         }, data);
      
//         return (
//           <div className="App">
//             <div className="input-area">
//               <h2>Add More Data</h2>
//               <div className="form-area">
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-1">
//                     <span>Add Name</span>
//                     <input
//                       value={type}
//                       placeholder="Enter Person Name..."
//                       onChange={(e) => setType(e.target.value)}
//                     />
//                   </div>
//                   </form>
                    
//             </div>
//           </div>
//           </div>
//         );
//       }

//       export default App;
      
/*
    return (
      <div>
        <button className='submit' onClick={handleSubmit}></button>
      </div>
    );
  }
    */