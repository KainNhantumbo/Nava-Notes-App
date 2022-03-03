import styled from 'styled-components'
import { colors } from './colors';

export const StyledTextAreaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    width: 90%;
    max-width: 400px;
    margin-top: 12vh;
    border-style: none;
    background-color: rgb(${colors.whiteColor});
    border-radius: 12px;
    resize: none;
    padding: 10px;
    line-height: 1.6rem;
    
    :focus {
      border: rgb(${colors.darkColor});
      box-shadow: 0px 0px 5px 2px rgba(${colors.secondaryColor}, .8);
      outline: none;
      transition: all .5s ease;
    }
  }
`;