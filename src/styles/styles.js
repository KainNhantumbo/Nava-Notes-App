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
  justify-content: center;
  flex-direction: column;
  background: rgb(${colors.secondaryColor});
  box-shadow: 0 1px 2px 0.5px rgba(${colors.primaryColor}, .6);
  position: fixed;
  top: 0;
  z-index: 50;

  h1 {
    font-weight: 600;
    margin: 0 auto;
    line-height: 4rem;
    user-select: none;
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
    padding: 5px 40px 5px 10px;
    line-height: 5em;
      
    &:focus {
      box-shadow: 0 0 5px 1px rgba(${colors.primaryColor} .9);
      outline: none;
    }
    &::placeholder {
      font-weight: 600;
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    background-color: rgba(${colors.secondaryColor}, .5);
    border-style: none;
    border-radius:  50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(${colors.primaryColor}, .3);
      transition: all .2s ease;
    }
    svg {
      padding: .2em;
      stroke-width: .5px;
      color: rgb(${colors.primaryColor})
    }
  }
`;