import styled from 'styled-components';
import { colors } from './colors';

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(${colors.whiteColor});
  margin-bottom: .5em;
  padding: 1em;
  border-radius: inherit;
  user-select: none;
  gap: .8em;

  img {
    width: 80%;
  }
  span {
    text-align: center;
    font-weight: 600;
    background-color: rgba(${colors.brownColor}, .9);
    padding: .5em;
    border-radius: 10px;
    line-height: 1.2rem;
  }
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: rgb(${colors.secondaryColor});
  box-shadow: 0 1px 2px 0.5px rgba(${colors.primaryColor}, .6);
  position: fixed;
  top: 0;
  z-index: 50;
  color: rgb(${colors.textColor});

  div {
    position:  absolute;
    top: 1em;
    left: 5em;
    
    svg {
      width: 2em;
      height: 2em;
      color: rgb(${colors.primaryColor});
      transform: rotateY('160 deg');
    }
  }

  h1 {
    font-weight: 600;
    line-height: 2rem;
    user-select: none;
    padding-left: .5em;
    font-size: 1.6rem;
  }
`;

export const StyledSearch = styled.label`
  width: 15em;
  height: 1.9em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1em;
  position: relative;

  input {
    width: inherit;
    border-style: none;
    border: none;
    border-radius: 15px;
    padding: 2px 5px 5px 28px;
    line-height: 5em;
      
    &:focus {
      box-shadow: 0 0 5px 1px rgba(${colors.primaryColor}, .7);
      outline: none;
    }
    &::placeholder {
      font-weight: 600;
      color: rgba(${colors.primaryColor} .9);
    }
  }

  svg {
    position: absolute;
    left: 8px;
    top: 7px;
    stroke-width: .5px;
    color: rgb(${colors.primaryColor});
  }
`;

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
    box-shadow: 0px 0px 5px 1px rgba(${colors.primaryColor}, .5);

    
    :focus {
      border: rgb(${colors.darkColor});
      box-shadow: 0px 0px 5px 2px rgba(${colors.secondaryColor}, .8);
      outline: none;
      transition: all .5s ease;
    }
  }
`;