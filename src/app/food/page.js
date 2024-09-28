'use client'
import React, { useState,useEffect } from 'react';
import './button.css';
import ButtonPair from './ButtonPair'; // Import the ButtonPair component

const Filter = () => {
    const [buttonPairs, setButtonPairs] = useState([
        [
            { id: 'Opt1', label: 'Now', opacity: 1 },
            { id: 'Opt2', label: 'Later', opacity: 1 },
        ],
        [
            { id: 'Opt3', label: 'Gourmet', opacity: 1 },
            { id: 'Opt4', label: 'Fast Food', opacity: 1 },
            { id: 'Opt5', label: 'Buffet', opacity: 1 },
            { id: 'Opt6', label: 'Any', opacity: 1},
        ],
        [
            { id: 'Opt7', label: 'Asian', opacity: 1},
            { id: 'Opt8', label: 'Hispanic', opacity: 1},
            { id: 'Opt9', label: 'American', opacity: 1},
            { id: 'Opt10', label: 'European', opacity: 1},
            { id: 'Opt11', label: 'Any', opacity: 1},
        ],
    ]);

    const [currentPairIndex, setCurrentPairIndex] = useState(0); // Track current button pair
    const [lastSelections, setLastSelections] = useState({});

    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; // Update the current pair with new buttons
        setButtonPairs(updatedPairs);

        // Move to the next pair if there is one
        if (currentPairIndex < buttonPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        }
    };



    const handleButtonClick = (id) => {
      setLastSelections((prevSelections) => ({
          ...prevSelections,
          [currentPairIndex]: id, // Track the last selected button for the current pair
      }));
    }

    const backOptions = () => {
        setCurrentPairIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Reset to the first pair
        setButtonPairs([
            [
                { id: 'Opt1', label: 'Now', opacity: 1 },
                { id: 'Opt2', label: 'Later', opacity: 1 },
            ],
            [
                { id: 'Opt3', label: 'Gourmet', opacity: 1 },
                { id: 'Opt4', label: 'Fast Food', opacity: 1 },
                { id: 'Opt5', label: 'Buffet', opacity: 1 },
            ],
            [
                { id: 'Opt6', label: 'Asian', opacity: 1},
                { id: 'Opt7', label: 'Hispanic', opacity: 1},
                { id: 'Opt8', label: 'American', opacity: 1},
                { id: 'Opt9', label: 'European', opacity: 1},
                { id: 'Opt10', label: 'Any', opacity: 1},
            ],
        ]);
    };

    const handleClick = (id) => {
      onButtonClick(id); // Call the parent click handler
      const updatedButtons = initialButtons.map(button => {
          return button.id === id ? { ...button, opacity: 0.5 } : button; // Change opacity on click
      });
      onNext(updatedButtons); // Call the function to pass updated buttons back to Filter
  };
  

    return (
        <div className='buttonContainer'>
            {buttonPairs.length > 0 && (
                <ButtonPair
                    initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                    onNext={handleNextButtons} // Pass the handler for new buttons
                    
                />
            )}
            <button className="Back" onClick={backOptions}>
                Back
            </button>
            <button className="Final" onClick={() => console.log(lastSelections)}>
                Submit
            </button>
        </div>
    );
};

export default Filter;
