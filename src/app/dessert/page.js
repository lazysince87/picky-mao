'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dessertRestaurantDecision from '../backend/dessertFunction';
import '../pages.css';

const ButtonPair = ({ initialButtons, onNext, onButtonClick }) => {
    return (
        <div>
            {initialButtons.map(button => (
                <button
                    key={button.id}
                    onClick={() => {
                        onButtonClick(button.id); // Call the handler with button ID
                        const updatedButtons = initialButtons.map(b => ({
                            ...b,
                            opacity: b.id === button.id ? 1 : b.opacity, // Set opacity for clicked button
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

const Filter = () => {
    const [buttonPairs, setButtonPairs] = useState([
        [
            { id: 'Now', label: 'Now', opacity: 1 },
            { id: 'Later', label: 'Later', opacity: 1 },
        ],
        [
            { id: 'gourmet', label: 'Iced', opacity: 1 },
            { id: 'fast food', label: 'Pastry', opacity: 1 },
        ],
        [
            { id: 1, label: 'Within 1 mile', opacity: 1 },
            { id: 2, label: 'Within 3 miles', opacity: 1 },
            { id: 3, label: '3+ miles', opacity: 1 },
        ],
    ]);

    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [lastSelections, setLastSelections] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
        const calculatedResult = dessertRestaurantDecision(lastSelections);
        setResult(calculatedResult);
    }, [lastSelections]);

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
        console.log(lastSelections); // You can handle submit logic here
    };

    return (
        <div className='buttonContainer'>
            {buttonPairs.length > 0 && (
                <ButtonPair
                    initialButtons={buttonPairs[currentPairIndex]}
                    onNext={handleNextButtons}
                    onButtonClick={handleButtonClick}
                />
            )}
            <button className="Back" onClick={backOptions}>
                Back
            </button>
            <button className="Final" onClick={handleSubmit}>
                Submit
            </button>
            {result && (
                <h1>{JSON.stringify(result)}</h1> // Display result
            )}
        </div>
    );
};

export default Filter;
