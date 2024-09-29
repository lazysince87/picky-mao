'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import drinkRestaurantDecision from '../backend/dessertFunction';
import App from '../api/App'
import '../modal.css'
import '../pages.css';

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
            { id: 1, label: 'Within 1 mile', opacity: 1 },
            { id: 2, label: 'Within 3 miles', opacity: 1 },
            { id: 3, label: '3+ miles', opacity: 1 },
        ],
    ]);

    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [lastSelections, setLastSelections] = useState({});
    const [result, setResult] = useState(null);
    const [hideLastSet, setHideLastSet] = useState(false); // State for hiding last set
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const calculatedResult = drinkRestaurantDecision(lastSelections);
        setResult(calculatedResult);
    }, [lastSelections]);

    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; 
        setButtonPairs(updatedPairs);

        // Move to the next pair if there is one
        if (currentPairIndex < buttonPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
            setHideLastSet(false); // Show buttons again when moving to the next pair
        }
    };

    const handleButtonClick = (id) => {
        setLastSelections((prevSelections) => ({
            ...prevSelections,
            [currentPairIndex]: id,
        }));

        // Hide the last set only if we are on the last button pair
        if (currentPairIndex === buttonPairs.length - 1) {
            setHideLastSet(true);
        }
    };

    const backOptions = () => {
        if (currentPairIndex > 0) {
            setCurrentPairIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            setHideLastSet(false); // Show buttons again when going back
        }
    };

    const handleSubmit = () => {
        const decision = drinkRestaurantDecision(lastSelections);
        console.log("Decision:", decision);
        setResult(decision);
        setIsModalOpen(true)
    };

    const ButtonPair = ({ initialButtons, onNext, onButtonClick }) => {
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
                    src='/capodrank.gif'
                    alt='Picky Mao Eats'
                    width={400}
                    height={400}
                    style={{ objectFit: 'contain', width: 'auto' }}
                />
                <div className='buttonContainer'>
                    {!hideLastSet && buttonPairs.length > 0 && (
                        <ButtonPair
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
