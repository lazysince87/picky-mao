'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ButtonPair from '../ButtonPair'; 
import foodRestaurantDecision from '../backend/foodFunction.js';
import App from '../api/App'
import '../modal.css'
import '../pages.css'


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
    const [result, setResult] = useState(null); // State to store the result
    const [hideLastSet, setHideLastSet] = useState(false); //Hiding last options
    const [catImage, setCatImage] = useState('/capochills.gif');
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; // Update the current pair with new buttons
        setButtonPairs(updatedPairs);

        // Move to the next pair if there is one
        if (currentPairIndex < buttonPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            setHideLastSet(true);
        }
    };

    const handleButtonClick = (id) => {
        setLastSelections((prevSelections) => ({
            ...prevSelections,
            [currentPairIndex]: id,
        }));
        setCatImage('/capoates.gif');
    };

    const backOptions = () => {
        if (currentPairIndex > 0) {
            setCurrentPairIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Reset to the first pair
            setHideLastSet(false);
        }
    };

    const handleSubmit = () => {
        const decision = foodRestaurantDecision(lastSelections);
        console.log("Decision:", decision);
        setResult(decision); // Store the result
        setIsModalOpen(true)
    };
    
    const ButtonPairComponent = ({ initialButtons, onNext, onButtonClick }) => {
        return (
            <div>
                {initialButtons.map(button => (
                    <button
                        className='button'
                        key={button.id}
                        onClick={() => {
                            onButtonClick(button.id); // Call the handler with button ID
                            const updatedButtons = initialButtons.map(b => ({
                                ...b,
                                opacity: b.id === button.id ? 1  : b.opacity,
                            }));
                            onNext(updatedButtons); // Pass updated buttons back to Filter
                        }}
                         style={{ opacity: button.opacity }}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        );
    };
    return (
        <div className = 'body'>
            <div className='buttonBox'>
                <Image
                className='catimg'
                src={catImage}
                alt='Picky Mao Cooks'
                width={400}
                height={400}
                style={{ objectFit: 'contain', width: 'auto' }}
            />
            <div className='buttonContainer'>
            {!hideLastSet && buttonPairs.length > 0 && (
                <ButtonPairComponent
                                initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                                onNext={handleNextButtons} // Pass the handler for new buttons
                                onButtonClick={handleButtonClick} // Pass button click handler
                            />
                        )}
                        <div className ='submitBtn'>
                            <button className="Back" onClick={backOptions}>
                                Back
                            </button>
                            <button className="Final" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {result && (
                <div className="resultContainer">
    
            {/* Modal */}
            <div className={`modal-overlay${isModalOpen ? '-visible' : ''}`}>
              <div className={`modal${isModalOpen ? '-visible' : ''}`}>
                <button className="exitButton" onClick={() => setIsModalOpen(false)}>
                        ✖     
                </button>
                <App className='api'></App>
                <h2>CAT COOKED!</h2>
                <h2>Recommended Restaurant:
                <p>{JSON.stringify(result)}</p>
                </h2>
              </div>
            </div>
                </div>
            )}
        </div>
    );
};

export default Filter;