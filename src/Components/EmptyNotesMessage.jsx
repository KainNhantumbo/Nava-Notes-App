import React from 'react';
import PropTypes from 'prop-types';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { Message } from '../Styled/styles';

const EmptyNotesMessage = ({message}) => {
   const alertIcon = <IoAlertCircleOutline />;
   return (
      <Message className="message">
         {alertIcon} 
         <span>{message}</span>          
      </Message>
   );
}

EmptyNotesMessage.propTypes = {
   message: PropTypes.string.isRequired
}

export default EmptyNotesMessage;