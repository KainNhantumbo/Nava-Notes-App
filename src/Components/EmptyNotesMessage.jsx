import React from 'react';
import PropTypes from 'prop-types';
import { IoAlertCircleOutline } from 'react-icons/io5'

const EmptyNotesMessage = ({message}) => {
   const alertIcon = <IoAlertCircleOutline />;
   return (
      <section className="message">
         {alertIcon} 
         <span>{message}</span>          
      </section>
   );
}

EmptyNotesMessage.propTypes = {
   message: PropTypes.string.isRequired
}

export default EmptyNotesMessage;