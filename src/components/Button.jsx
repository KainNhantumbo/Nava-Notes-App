import React from 'react';

function Button ({ event , icon, description}) {
    return (
        <button onClick={ event }>
            <span> {description} </span>
            { icon }
        </button>
    );
}

export default Button;