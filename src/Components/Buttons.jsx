import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({iconSrc, alt, event}) => {
    return <button onClick={event}><img src={iconSrc} alt={alt} /></button>;
}

Buttons.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

Buttons.defaultProps = {
    alt: 'Button icon'
}

export default Buttons;