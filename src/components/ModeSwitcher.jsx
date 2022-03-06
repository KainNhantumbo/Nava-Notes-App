import React from 'react';
import PropTypes from 'prop-types';

const ModeSwitcher = ({ text, action }) => {
  return ( 
    <section>
      <span> { text } </span>
      <div> { action } </div>
    </section>
  );
}

ModeSwitcher.propTypes = {
  text: PropTypes.string.isRequired
}
 
export default ModeSwitcher;