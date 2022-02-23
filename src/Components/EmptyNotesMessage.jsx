import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../styles/styles';
import colleguesImg from '../images/Collegues.png'

const EmptyNotesMessage = ({message}) => {
   return (
      <Message className="message">
         <img src={colleguesImg} alt="people image" />       
         <span>{message}</span>          
      </Message>
   );
}

EmptyNotesMessage.propTypes = {
   message: PropTypes.string.isRequired
}

export default EmptyNotesMessage;