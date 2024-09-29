'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ButtonPair from '../ButtonPair'; 
import '../pages.css';
import foodRestaurantDecision from '../backend/foodFunction.js';

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
            { id: 'asian', label: 'Asian', opacity: 1 },
            { id: 'hispanic', label: 'Hispanic', opacity: 1 },
            { id: 'american', label: 'American', opacity: 1 },
            { id: 'european', label: 'European', opacity: 1 },
            { id: 'Any', label: 'Any', opacity: 1 },
        ],
        [
            { id: 1, label: 'Within 1 mile', opacity: 1 },
            { id: 2, label: 'Within 2 miles', opacity: 1 },
            { id: 3, label: 'Within 3+ miles', opacity: 1 },
        ],
    ]);

    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [lastSelections, setLastSelections] = useState({});
    const [result, setResult] = useState(null);
    const [hideLastSet, setHideLastSet] = useState(false); // New state for hiding last set

    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; 
        setButtonPairs(updatedPairs);

        // Move to the next pair if there is one
        if (currentPairIndex < buttonPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            // If we are at the last pair, set hideLastSet to true
            setHideLastSet(true);
        }
    };

    const handleButtonClick = (id) => {
        setLastSelections((prevSelections) => ({
            ...prevSelections,
            [currentPairIndex]: id,
        }));
    };

    const backOptions = () => {
        if (currentPairIndex > 0) {
            setCurrentPairIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            setHideLastSet(false); // Show buttons again when going back
        }
    };

    const handleSubmit = () => {
        const decision = foodRestaurantDecision(lastSelections);
        console.log("Decision:", decision);
        setResult(decision);
    };

    const ButtonPairComponent = ({ initialButtons, onNext, onButtonClick }) => {
        return (
            <div>
                {initialButtons.map(button => (
                    <button
                        className='button'
                        key={button.id}
                        onClick={() => {
                            onButtonClick(button.id);
                            const updatedButtons = initialButtons.map(b => ({
                                ...b,
                                opacity: b.id === button.id ? 1 : b.opacity,
                            }));
                            onNext(updatedButtons);
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
        <div className='body'>
            <div className='buttonBox'>
                <Image
                    className='catimg'
                    src='/capochills.gif'
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
                    <div className='submitBtn'>
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
                    <h2>Recommended Restaurant:</h2>
                    <p>{JSON.stringify(result)}</p>
                </div>
            )}
        </div>
    );
};

export default Filter;
