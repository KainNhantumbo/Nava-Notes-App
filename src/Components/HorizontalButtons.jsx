import React from 'react';
import PropTypes from 'prop-types';

const HorizontalButtons = ({ icon, description }) => {
    return (
        <button>
            <div>
                { icon }
            </div>
            <span>
                { description }
            </span>
        </button>
    )
}

HorizontalButtons.propTypes = {
    description: PropTypes.string.isRequired
}



export default HorizontalButtons