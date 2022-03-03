import styled from 'styled-components'
import { colors } from './colors';

export const StyledTextAreaContainer = styled.section`
  * {
    box-sizing: border-box;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12vh;
  

  :focus {
    border: rgb(${colors.darkColor});
    box-shadow: 0px 0px 5px 2px rgba(${colors.secondaryColor}, .8);
    outline: none;
    transition: all .5s ease;
  }

  input {
    width: 90%;
    max-width: 400px;
    padding: 10px;
    padding-right: 20px;
    border-style: none;
    border-radius: 5px 5px 0 0;

    outline: none;
  }

  textarea {
    width: 90%;
    max-width: 400px;
    border-style: none;
    background-color: rgb(${colors.whiteColor});
    resize: none;
    padding: 10px;
    line-height: 1.6rem;

    ::-webkit-scrollbar {
      background: rgb(${colors.primaryColor});
      padding: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(${colors.secondaryColor}, .9);
      border-radius: 12px;

      :hover {
        background: rgba(${colors.whiteColor}, .6);
        
      }
    }

    :focus {
      outline: none;
    }
  }
`;