import React from 'react';
import PropTypes from 'prop-types';

const OptionBox = ({ text, action }) => {
  return ( 
    <div>
      <span>
        { text }
      </span>
      <div>
      { action }
      </div>
    </div>
  );
}

OptionBox.propTypes = {
  text: PropTypes.string.isRequired
}
 
export default OptionBox;