import { StyledTextAreaContainer as Container } from '../styles/textArea';

const TextArea = ({ titleChangeEvent, textChangeEvent, textAreaValue, inputValue }) => {
  return (
    <Container>
      <input type="text"
        placeholder='Title...'
        value={inputValue}
        onChange={titleChangeEvent}
      />
      <textarea name="textArea" cols="30" rows="12"
        placeholder='Type a new note here...'
        onChange={textChangeEvent}
        value={textAreaValue}
      />
    </Container>
  );
}

export default TextArea;

