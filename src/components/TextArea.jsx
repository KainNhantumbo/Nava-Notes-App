import React from 'react';
import { StyledTextAreaContainer } from '../styles/textArea';

const TextArea = ({ titleChangeEvent, textChangeEvent, textAreaValue, inputValue }) => {
  return (
    <StyledTextAreaContainer>
      <input type="text"
        placeholder='Title...'
        defaultValue={inputValue}
        onChange={titleChangeEvent}
      />
      <textarea name="textArea" cols="30" rows="12"
        placeholder='Type a new note here...'
        onChange={textChangeEvent}
        defaultValue={textAreaValue}
      >
      </textarea>
    </StyledTextAreaContainer>
  );
}

export default TextArea;

