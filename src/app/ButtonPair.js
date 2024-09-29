import React from 'react';

const ButtonPair = ({ initialButtons, onNext }) => {
    const handleClick = (id) => {
        // Example click handling logic
        const updatedButtons = initialButtons.map(button => {
            return button.id === id ? { ...button, opacity: 0.5 } : button; // Change opacity on click
        });
        onNext(updatedButtons); // Call the function to pass updated buttons back to Filter
    };

    return (
        <div className='buttonPair'>
            {initialButtons.map(button => (
                <button
                    key={button.id}
                    style={{ opacity: button.opacity }}
                    onClick={() => handleClick(button.id)}
                    disabled={button.opacity === 0.5} // Disable if opacity is 0.5
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonPair;