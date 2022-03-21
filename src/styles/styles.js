import styled from 'styled-components';
import { colors } from './colors';

export const Message = styled.section`
  position: relative;
  display: flex;
  width: 12em;
  height: 12em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10em;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: 50%;
  user-select: none;
  gap: .8em;
  background-color: ${() => {
    if (colors.primaryColor === '135, 86, 112') {
      return `rgba(${colors.textColor}, .1)`
    } else {
      return `rgba(${colors.secondaryColor}, .5)`
    }
  }};

  svg {
    position: absolute;
    width: 5em;
    height: 5em;
    top: 1.2em;
    left: calc(12em - 7.5em);
    color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.textColor}, .8)`
      } else {
        return `rgb(${colors.primaryColor})`
      }
    }};
    transform: rotate(45deg);
  }
  span {
    padding-top: 5em;
    text-align: center;
    font-weight: 600;
    color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.textColor}, .8)`
      } else {
        return `rgba(${colors.textColor}, .8)`
      }
    }};
    line-height: 1.2rem;
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
    background-color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.primaryColor}, .8)` 
      } else {
        return `rgba(${colors.whiteColor})`
      }
    }};
    color: rgb(${colors.textColor});
      
    &:focus {
      box-shadow: 0 0 5px ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.fullDarkColor}, .6)` 
        } else {
          return `rgba(${colors.primaryColor}, .6)`
        }
      }};
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: rgba(${colors.textColor}, .9);
    }
  }

  svg {
    position: absolute;
    left: 8px;
    top: 7px;
    stroke-width: .5px;
    color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.textColor}, .7)` 
      } else {
        return `rgba(${colors.primaryColor})`
      }
    }};
  }
  
`;

export const AddNoteButton = styled.div`
  position: relative;
  z-index: 60;

  button {
    border-style: none;
    position: fixed;
    top: .9em;
    right: 1.2em;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: grid;
    place-content: center;
    

    :hover {
      transform: scale(1.05);
      transition: all .2s ease-out;
      box-shadow: 0 0 5px ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.fullDarkColor}, .6)` 
        } else {
          return `rgba(${colors.primaryColor}, .5)`
        }
      }};
    }

    svg {
      width: 20px;
      height: 20px;
      color: rgb(${colors.primaryColor});
    }
  }
`;