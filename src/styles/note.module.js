import styled from 'styled-components';
import { colors } from './colors';

export const NoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background: rgba(${colors.whiteColor}, 0.9);
  box-shadow: 0 0 5px rgba(${colors.primaryColor}, 0.6);
  margin-bottom: 0.5em;
  padding: 1em;
  border-radius: inherit;
  position: relative;
  overflow: hidden;

  .noteTitle, .noteContent {
    overflow: hidden;
    max-width: 75%;
  }
   
`;