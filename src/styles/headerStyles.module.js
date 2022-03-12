import styled from 'styled-components';
import { colors } from './colors';

export const HeaderStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(120deg, rgb(${colors.secondaryColor}) 12%, rgb(${colors.primaryColor}) 160%);
  box-shadow: 0 0 5px ${() => {
    if (colors.primaryColor === '135, 86, 112') {
      return `rgba(${colors.fullDarkColor}, .6)` 
    } else {
      return `rgba(${colors.primaryColor}, .6)`
    }
  }};
  position: fixed;
  top: 0;
  z-index: 50;
  color: rgb(${colors.textColor});
  border-radius: 0 0 12px 12px;

  div {
    position:  absolute;
    top: 1em;
    left: 5em;
    
    svg {
      width: 1.8em;
      height: 1.8em;
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.fullDarkColor}, .3)`
        } else {
          return `rgb(${colors.primaryColor})`
        }
      }};
    }
  }

  h1 {
    font-weight: 600;
    line-height: 2rem;
    user-select: none;
    padding-left: .5em;
    font-size: 1.6rem;
    color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.textColor}, .7)`
      } else {
        return `rgba(${colors.textColor})`
      }
    }};
  }

  button {
    position: relative;
    width: 90%;
    max-width: 15em;
    border-style: none;
    border-radius: 12px;
    margin: 0 auto;
    margin-bottom: 1.2em;
    padding: 5px;
    font-weight: 600;
    color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.textColor}, .7)`
      } else {
        return `rgba(${colors.textColor})`
      }
    }};
    background-color: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.backgroundColor}, .8)`
      } else {
        return `rgb(${colors.secondaryColor})`
      }
    }};

    :hover {
      box-shadow: 0 0 5px ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.fullDarkColor}, .6)` 
        } else {
          return `rgba(${colors.primaryColor}, .6)`
        }
      }};
      transition: .2s ease-out;
    }

    svg {
      position: absolute;
      left: 10px;
      top: 5px;
      width: 20px;
      height: 20px;
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .7)`
        } else {
          return `rgb(${colors.secondaryColor})`
        }
      }};
    }
  }
`;

