'use client'
import { useState, useEffect } from 'react';
import '../pages.css'
import ButtonPair from '../ButtonPair'; 
import  dessertRestaurantDecision  from '../backend/dessertFunction';
import Image from 'next/image'

    const Filter = () => {
        const [buttonPairs, setButtonPairs] = useState([
            [
                { id: 'Now', label: 'Now', opacity: 1 },
                { id: 'Later', label: 'Later', opacity: 1 },
            ],
            [
                { id: 'Iced', label: 'Iced', opacity: 1 },
                { id: 'Hot', label: 'Hot', opacity: 1 },
            ],
            [
              { id: 1, label: 'Within 1 mile', opacity: 1},
              { id: 2, label: 'Within 3 miles', opacity: 1},
              { id: 3, label: '3+ miles', opacity: 1},
    
            ],
        ]);
    
        const [currentPairIndex, setCurrentPairIndex] = useState(0); // Track current button pair
        const [lastSelections, setLastSelections] = useState({});
        const [result, setResult] = useState(null); // To store the result
    
        useEffect(() => {
            // Calculate result whenever lastSelections changes
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
            }
        };
    
    
    
        const handleButtonClick = (id) => {
            setLastSelections((prevSelections) => ({
                ...prevSelections,
                [currentPairIndex]: id,
            }));
        };
        const backOptions = () => {
            setCurrentPairIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Previous Pair
    
        };

        const handleSubmit = ()=> {
            // const decision = foodRestaurantDecision(lastSelections);
            const decision = foodRestaurantDecision(lastSelections);
            console.log("Decision:", decision);
            setResult(decision); // Store the result
        };
    
        const handleClick = (id) => {
            onButtonClick(id); // Call the parent click handler
            const updatedButtons = initialButtons.map(button => {
            });
            onNext(updatedButtons); // Update
        };
        
        const ButtonPair = ({ initialButtons, onNext, onButtonClick }) => {
            return (
                <div>
                    {initialButtons.map(button => (
                        <button
                            className='button'
                            key={button.id}
                            onClick={() => {
                                onButtonClick(button.id); // Call the handler with button ID
                                const updatedButtons = initialButtons.map(b => {
                                    return b.id === button.id ? { ...b, opacity: 1 } : b;
                                });
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
            <div className='body'>
                <div className='buttonBox'>
                    <Image
                    className='catimg'
                    src='/capodrank.gif'
                    alt='Picky Mao Eats'
                    width={400}
                    height={400}
                    style={{ objectFit: 'contain', width: 'auto' }}
                />
                <div className='buttonContainer'>
                {buttonPairs.length > 0 && (
                    <><ButtonPair
                                    initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                                    onNext={handleNextButtons} // Pass the handler for new buttons
                                    onButtonClick={handleButtonClick} // Pass button click handler
                                /><div>
                                        {buttonPairs.length > 0 && (
                                            <ButtonPair
                                                initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                                                onNext={handleNextButtons} // Pass the handler for new buttons
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
                                    </div></>
                )}
                </div>
            </div>

                {result && (
                    <div className="resultContainer">
                        <h2>Recommended Restaurant:</h2>
                        <p>{JSON.stringify(result)}</p> {/* Display the result here */}
                    </div>
                )}
            </div>
        );
    };
    
    export default Filter;