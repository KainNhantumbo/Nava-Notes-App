import React from 'react';

const Buttons = ({IconSrc, alt}) => {
    return (
        <span className="buttonsContainer">
            <button><img src={IconSrc} alt={alt} /></button>
            <button><img src={IconSrc} alt={alt} /></button>
        </span>
    );
}

export default Buttons;