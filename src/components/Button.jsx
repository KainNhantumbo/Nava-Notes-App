import React from 'react';
import PropTypes from 'prop-types';

function Button ({ event , icon, description}) {
    return (
        <button onClick={ event }>
            <span> {description} </span>
            { icon }
        </button>
    );
}

Button.propTypes = {
    description: PropTypes.string,
    icon: PropTypes.object
}

export default Button;


