import React from 'react';
import { StyledTextAreaContainer } from '../styles/textAreaStyles';

const TextArea = ({ titleChangeEvent, textChangeEvent }) => {
  return ( 
    <StyledTextAreaContainer>
      <input type="text" placeholder='Title...' value={titleChangeEvent}/>
      <textarea name="textArea" cols="30" rows="10" placeholder='Type a new note here...' defaultValue={''} value={textChangeEvent}>
      </textarea>
    </StyledTextAreaContainer>
  );
}
 
export default TextArea;

