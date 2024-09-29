import React from 'react';

const ButtonPair = ({ initialButtons, onNext, onButtonClick }) => {
    return (
        <div>
            {initialButtons.map(button => (
                <button
                    key={button.id}
                    onClick={() => {
                        onButtonClick(button.id);
                        const updatedButtons = initialButtons.map(b => {
                            return b.id === button.id ? { ...b, opacity: 0.5 } : b; // Change opacity on click
                        });
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

export default ButtonPair;
