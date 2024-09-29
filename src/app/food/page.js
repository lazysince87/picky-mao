'use client'
import React, { useState,useEffect } from 'react';
import ButtonPair from './ButtonPair';


const Filter = () => {
    const [buttonPairs, setButtonPairs] = useState([
        [
            { id: 'Now', label: 'Now', opacity: 1 },
            { id: 'Later', label: 'Later', opacity: 1 },
        ],
        [
            { id: 'gourmet', label: 'Gourmet', opacity: 1 },
            { id: 'fast food', label: 'Fast Food', opacity: 1 },
            { id: 'buffet', label: 'Buffet', opacity: 1 },
        ],
        [
            { id: 'asian', label: 'Asian', opacity: 1},
            { id: 'hispanic', label: 'Hispanic', opacity: 1},
            { id: 'american', label: 'American', opacity: 1},
            { id: 'european', label: 'European', opacity: 1},
            { id: 'Any', label: 'Any', opacity: 1},
        ],
        [
          { id: 1, label: 'Within 1 mile', opacity: 1},
          { id: 2, label: 'Within 2 miles', opacity: 1},
          { id: 3, label: 'Within 3+ miles', opacity: 1},

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
            [currentPairIndex]: id,
        }));
    };
    

    const backOptions = () => {
        setCurrentPairIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Reset to the first pair

    };

    
    
    return (
        <div className='buttonContainer'>
            {buttonPairs.length > 0 && (
                <ButtonPair
                    initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                    onNext={handleNextButtons} // Pass the handler for new buttons
                    onButtonClick={handleButtonClick} // Pass button click handler
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