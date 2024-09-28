'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import ButtonPair from '../ButtonPair'; 
import '../pages.css'

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

    const handleNextButtons = (newButtons) => {
        const updatedPairs = [...buttonPairs];
        updatedPairs[currentPairIndex] = newButtons; // Update the current pair with new buttons
        setButtonPairs(updatedPairs);

        // Move to the next pair if there is one
        if (currentPairIndex < buttonPairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            // Optionally, you can add more pairs here if desired
            addNewButtonPair();
        }
    };

    const addNewButtonPair = () => {
        const newPair = [
            { id: `Opt${buttonPairs.length * 2 + 1}`, label: `New Pair ${buttonPairs.length + 1} - Button 1`, opacity: 1 },
            { id: `Opt${buttonPairs.length * 2 + 2}`, label: `New Pair ${buttonPairs.length + 1} - Button 2`, opacity: 1 },
        ];
        setButtonPairs([...buttonPairs, newPair]); // Add the new button pair
    };

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
                            initialButtons={buttonPairs[currentPairIndex]} // Only show current pair
                            onNext={handleNextButtons} // Pass the handler for new buttons
                            
                        />
                    )}
                    <button className="Back" onClick={backOptions}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
