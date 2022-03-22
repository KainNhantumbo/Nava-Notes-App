import styled from 'styled-components';
import { colors } from './colors';

export const NoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background: rgba(${colors.whiteColor}, .9);
  box-shadow: 0 0 5px ${() => {
    if (colors.primaryColor === '135, 86, 112') {
      return `rgba(${colors.fullDarkColor}, .6)` 
    } else {
      return `rgba(${colors.primaryColor}, .6)`
    }
  }};
  margin-bottom: 0.5em;
  padding: 1em;
  border-radius: inherit;
  position: relative;
  overflow: hidden;
  margin-top: .9em;
  border: 1px solid transparent;
  color: rgba(${colors.textColor}, .9);

  :hover {
    border: 1px solid rgba(${colors.primaryColor}, .5);
    transition: .2s ease-out;
  }

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
    background: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.primaryColor}, .8)` 
      } else {
        return `rgba(${colors.primaryColor}, .1)`
      }
    }};
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    color: rgba(${colors.textColor}, .8);
  }
`;