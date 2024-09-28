import {useState, useEffect} from 'react'

/*
export default function FoodPage() {
*/
    function App() {
        const [type, setType] = useState("");
      
        const [data, setData] = useState([]);
      
        const handleSubmit = (event) => {
          event.preventDefault();
          fetch("http://localhost:3000/add", {
            method: "PUT", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,age,country}),
          })
            .then((response) => response.json())
            .then((data) => {
              setData(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        };
      
        useEffect(() => {
          fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((item) => setData(item));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, data);
      
        return (
          <div className="App">
            <div className="input-area">
              <h2>Add More Data</h2>
              <div className="form-area">
                <form onSubmit={handleSubmit}>
                  <div className="input-1">
                    <span>Add Name</span>
                    <button
                      value={type}
                      placeholder="Enter Person Name..."
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                  </form>
                    
            </div>
          </div>
          </div>
        );
      }

      export default App;
      
/*
    return (
      <div>
        <button className='submit' onClick={handleSubmit}></button>
      </div>
    );
  }
    */