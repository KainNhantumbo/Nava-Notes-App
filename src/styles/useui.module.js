import styled from 'styled-components';
import { colors } from './colors';

export const UserUIContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
  article {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    width: 90%;
    max-width: 400px;
    margin-top: 12vh;
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

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
      svg {
        width: 4em;
        height: 4em;
        top: .5em;
        left: 1em;
        position: absolute;
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .6)`
          } else {
            return `rgb(${colors.primaryColor})`
          }
        }};
       }
    }
    section {
      display: flex;
      justify-content: flex-end;
      flex-flow: column nowrap;
      padding-left: 7em;
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)`
        } else {
          return `rgb(${colors.textColor})`
        }
      }};
      span {
        padding: .2em .5em;
        border-radius: 5px;
        :hover {
          background-color: ${() => {
            if (colors.primaryColor === '135, 86, 112') {
              return `rgba(${colors.backgroundColor}, .8)`
            } else {
              return `rgba(${colors.secondaryColor}, .2)`
            }
          }};
        }
      }
    }
  }
`;