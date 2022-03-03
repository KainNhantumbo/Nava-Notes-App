import React from 'react';
import { StyledTextAreaContainer } from '../styles/textAreaStyles';

const TextArea = ({ titleChangeEvent, textChangeEvent }) => {
  return ( 
    <StyledTextAreaContainer>
      <input type="text" placeholder='Title...' onChange={titleChangeEvent}/>
      <textarea name="textArea" cols="30" rows="10" placeholder='Type a new note here...' defaultValue={''} onChange={textChangeEvent}>
      </textarea>
    </StyledTextAreaContainer>
  );
}
 
export default TextArea;

