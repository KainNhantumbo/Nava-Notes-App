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

  input, textarea {
    width: 90%;
    max-width: 400px;
    border-style: none;
    outline: none;
    padding: 10px;
    color: rgb(${colors.textColor});
    background: rgb(${colors.whiteColor});

    ::placeholder {
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .5)`
        }
      }};
    }
  }

  input {
    padding-right: 20px;
    border-radius: 5px 5px 0 0;
    font-size: 16pt;
  }

  textarea {
    resize: none;
    line-height: 1.6rem;
    font-size: 12pt;

    ::-webkit-scrollbar {
      background: transparent;
      padding: 5px;
      border-radius: 8px;
      width: .5em;
    }

    ::-webkit-scrollbar-thumb {
      background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgb(${colors.fullDarkColor})`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      border-radius: 12px;

      :hover {
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.fullDarkColor}, .5)`
          } else {
            return `rgba(${colors.primaryColor}, .6)`
          }
        }};
      }
    }
  }
`;