import styled from 'styled-components';
import { colors } from './colors';

export const StyledLabelsContainer = styled.section`
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
    margin: .5em 0;
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
        return `rgb(${colors.secondaryColor})`
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
      padding-left: .5em;
      color: rgba(${colors.textColor}, .8);

      :hover {
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .5)`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      }
    }

    input[type="radio"] {
      position: absolute;
      top: 1em;
      right: 1em;
      appearance: none;
      margin: 0;
      background: rgb(${colors.backgroundColor});

      width: 20px;
      height: 20px;
      border: 2px solid ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)` 
        } else {
          return `rgb(${colors.secondaryColor})`
        }
      }};
      border-radius: 50%;

      display: grid;
      place-content: center;

      :checked::before {
        content: '';
        width: 8px;
        height: 8px;
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .8)`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
        border-radius: 50%;
        margin: auto;
      }
    }
  }
`;