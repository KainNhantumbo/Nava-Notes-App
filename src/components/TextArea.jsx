import React from 'react';
import { StyledTextAreaContainer } from '../styles/textArea';

const TextArea = ({ titleChangeEvent, textChangeEvent }) => {
  return ( 
    <StyledTextAreaContainer>
      <input type="text" placeholder='Title...' onChange={titleChangeEvent}/>
      <textarea name="textArea" cols="30" rows="12" placeholder='Type a new note here...' onChange={textChangeEvent}>
      </textarea>
    </StyledTextAreaContainer>
  );
}
 
export default TextArea;

