import React from 'react';

const HorizontalButtons = ({ icon, description, event }) => {
    return (
        <button onClick={event}>
            <div> { icon } </div>
            <span> { description } </span>
        </button>
    );
}

export default HorizontalButtons;