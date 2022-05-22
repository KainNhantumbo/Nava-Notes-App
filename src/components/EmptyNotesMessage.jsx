import React from 'react';
import { Message } from '../styles/styles';

const EmptyNotesMessage = ({message, label, icon}) => {
   return (
      <Message>
         { icon }   
         <span> 
            {label} <br/>
            {message}
         </span>          
      </Message>
   );
}

export default EmptyNotesMessage;