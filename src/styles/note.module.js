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
  margin-top: .9em;

  .noteTitle {
    overflow: hidden;
    max-width: 75%;
    padding: .2em 0;
  }
  
  .noteContent {
    margin: .5em 0;
    word-wrap: break-word;
    line-height: 1.3rem;
    max-width: 95%;
  }

  .noteDate {
    padding: .5em;
    font-size: .8rem;
    background: rgba(${colors.primaryColor}, .1);
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    color: rgba(${colors.textColor}, .8);
  }
`;