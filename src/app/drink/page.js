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
            { id: 'cold', label: 'Cold', opacity: 1 },
            { id: 'hot', label: 'Hot', opacity: 1 },
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

    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; 
        setButtonPairs(updatedPairs);

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
        setCurrentPairIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleSubmit = () => {
        const decision = foodRestaurantDecision(lastSelections);
        console.log("Decision:", decision);
        setResult(decision); // Store the result
    };

    return (
        <div className='body'>
            <div className='CatCooks'>
                <Image
                    src='/capoeats.gif'
                    alt='Picky Mao Eats'
                    width={400}
                    height={400}
                    style={{ objectFit: 'contain', width: 'auto' }}
                />
                <div className='buttonContainer'>
                    {buttonPairs.length > 0 && (
                        <ButtonPair
                            initialButtons={buttonPairs[currentPairIndex]}
                            onNext={handleNextButtons}
                            onButtonClick={handleButtonClick}
                        />
                    )}
                </div>
            </div>
            <div className='buttonContainer'>
                <button className="Back" onClick={backOptions}>
                    Back
                </button>
                <button className="Final" onClick={handleSubmit}>
                    Submit
                </button>
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
