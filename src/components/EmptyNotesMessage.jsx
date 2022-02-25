import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../styles/styles';
import colleguesImg from '../images/Collegues.png'

const EmptyNotesMessage = ({message, label}) => {
   return (
      <Message>
         <img src={colleguesImg} alt="people" />     
         <span> 
            {label} <br/>
            {message}
         </span>          
      </Message>
   );
}

EmptyNotesMessage.propTypes = {
   label: PropTypes.string.isRequired,
   message: PropTypes.string.isRequired
}

export default EmptyNotesMessage;