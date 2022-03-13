import styled from 'styled-components';
import { colors } from './colors';

export const ModeSwitcherStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
    max-width: 400px;
    margin-top: 12vh;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    user-select: none;
    box-shadow: 0 0 5px ${() => {
    if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.fullDarkColor}, .6)` 
      } else {
        return `rgba(${colors.primaryColor}, .6)`
      }
    }};

    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    background: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgb(${colors.whiteColor})`
      } else {
        return `rgb(${colors.backgroundColor})`
      }
    }};

    :hover {
      border-left: 2px solid ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .5)` 
        } else {
          return `rgb(${colors.secondaryColor})`
        }
      }};
      border-right: 2px solid ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .5)` 
        } else {
          return `rgb(${colors.secondaryColor})`
        }
      }};
    }

    label {
      padding-left: 2.5em;
      color: rgba(${colors.textColor}, .8);
      position: relative;
      
      :hover {
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .5)`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      }

      svg {
        width: 1.6em;
        height: 1.6em;
        position: absolute;
        top: .3em;
        left: .5em;
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .6)`
          } else {
            return `rgb(${colors.primaryColor})`
          }
        }};
      }
    }

    input[type="checkbox"] {
      position: relative;
      width: 45px;
      height: 20px;
      appearance: none;
      -moz-appearance: none;
      background: rgba(${colors.primaryColor}, .1);
      outline: none;
      border-radius: 15px;
      box-shadow: inset 0 0 5px rgba(${colors.fullDarkColor}, .2);
      transition: .5s ease;
      margin-top: .4em;
      margin-right: .2em;

      :checked {
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgb(${colors.primaryColor})`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      }
      
      ::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        transform: scale(1.1);
        border-radius: 50%;
        top: 0;
        left: 0;
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.secondaryColor}, .8)`
          } else {
            return `rgb(${colors.whiteColor})`
          }
        }};
        box-shadow: 0 0 5px ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.fullDarkColor}, .6)` 
          } else {
            return `rgba(${colors.primaryColor}, .6)`
          }
        }};
        transition: all .2s ease;
      }

      :checked::after {
        transform: scale(1.1) translateX(25px);
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.whiteColor})`
          }
        }};
      }
    }
  }
`;