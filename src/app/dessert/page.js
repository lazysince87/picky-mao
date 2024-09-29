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
    const [hideLastSet, setHideLastSet] = useState(false);

    useEffect(() => {
        const calculatedResult = dessertRestaurantDecision(lastSelections);
        setResult(calculatedResult);
    }, [lastSelections]);

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
    };

    const backOptions = () => {
        if (currentPairIndex > 0){
        setCurrentPairIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setHideLastSet(false);
        }
    };

    const handleSubmit = () => {
        const decision = dessertRestaurantDecision(lastSelections);
        console.log("Decision:", decision);
        setResult(decision); // Store the result
    };
    
    const ButtonPairComponent = ({ initialButtons, onNext, onButtonClick }) => {
    return (
        <div>
            {initialButtons.map(button => (
                <button
                    className='button'
                    key = {button.id}
                    onClick={() => {
                        onButtonClick(button.id);
                        const updatedButtons = initialButtons.map(b => ({
                            ...b,
                            opacity: b.id === button.id ? 1 : b.opacity,
                        }));
                        onNext(updatedButtons);
                    }}
                    style={{opacity: button.opacity}}
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
                    src='/capoeats3.gif'
                    alt='Picky Mao Eats'
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
                            Cat cooks!
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