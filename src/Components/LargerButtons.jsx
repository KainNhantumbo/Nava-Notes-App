import React from 'react';

const LargerButtons = ({icon, event}) => {
    return (
        <button onClick={ event }>
            { icon }
        </button>
    );
}

export default LargerButtons;