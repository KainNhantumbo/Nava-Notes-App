import React from 'react';
import PropTypes from 'prop-types';

const OptionBox = ({ text, action }) => {
  return ( 
    <section>
      <span> { text } </span>
      <div> { action } </div>
    </section>
  );
}

OptionBox.propTypes = {
  text: PropTypes.string.isRequired
}
 
export default OptionBox;