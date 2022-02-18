import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({IconSrc, alt}) => {
    return (
        <button><img src={IconSrc} alt={alt} /></button>
    );
}

Buttons.propTypes = {
    IconSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

Buttons.defaultProps = {
    alt: 'Button icon'
}

export default Buttons;