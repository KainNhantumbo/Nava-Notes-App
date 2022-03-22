import { colors } from "./colors";
import Styled from 'styled-components';

export const NotificationContainer = Styled.section`
  width: 100vw;
  height: 10vh;
  margin-top: 80vh;
  background: none;
  z-index: 52;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  justify-items: center;
  align-items: center;

  section {
    width: 90%;
    max-width: 400px;
    height: 3em;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 1.2em;
    position: relative;
    background: rgba(${colors.textColor}, .8);
    box-shadow: 0 0 5px ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.fullDarkColor}, .6)`;
      } else {
        return `rgba(${colors.primaryColor}, .6)`;
      }
    }};
    background: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgb(${colors.backgroundColor})`
      } else {
        return `rgb(${colors.whiteColor})`
      }
    }};


    svg {
      position: absolute;
      top: .4em;
      left: 1em;
      width: 35px;
      height: 35px;

      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)`
        } else {
          return `rgb(${colors.primaryColor})`
        }
      }};
    }

    span {
      padding-left: 2em;
      font-weight: 600;
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)`
        } else {
          return `rgb(${colors.textColor})`
        }
      }};
    }

    button {
      position: relative;
      border-style: none;
      padding: .5em 1em;
      border-radius: 5px;
      font-weight: 600;
      background: transparent;
      outline: none;
      color: rgba(${colors.textColor}, .8);
      
      :hover {
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.primaryColor}, .3)`
          } else {
            return `rgba(${colors.secondaryColor}, .4)`
          }
        }};
        transition: all 100ms ease-out;
      }
      
      span {
        padding: 0;
        padding-right: 1.2em;
      }

      svg {
        width: 1.1em;
        height: 1.1em;
        position: absolute;
        top: .6em;
        left: 4.6em;
      }
    }
  }
`;