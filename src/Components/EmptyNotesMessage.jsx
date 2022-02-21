import React from 'react';
import PropTypes from 'prop-types';

const EmptyNotesMessage = ({message}) => {
   return (
      <section className="message">
         <span>{message}</span>          
      </section>
   );
}

EmptyNotesMessage.propTypes = {
   message: PropTypes.string.isRequired
}

export default EmptyNotesMessage;