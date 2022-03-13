import styled from "styled-components";
import { colors } from "./colors";

export const InterfaceStyles = styled.section`
  * {
    box-sizing: border-box;
  }

  width: 100vw;
  height: 100vh;
  z-index: 500;
  background: rgba(${colors.fullDarkColor}, .2);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;

  .heading {
    display: flex;
    justify-content: center;
    background: rgba(${colors.backgroundColor});
    padding: 15px;
    gap: 2em;
    position: relative;
    border-radius: 0 0 22px 22px;

    button {
      width: 26px;
      height: 26px;
      border-style: none;
      border-radius: 50%;
      display: grid;
      place-content: center;
      position: absolute;
      outline: none;
      top: .7em;
      left: 2em;
      background: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgb(${colors.primaryColor})`
        }
      }};

      :hover {
        background: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .5)`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      }

      svg {
        width: 20px;
        height: 20px;
        stroke-width: 1px;
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.fullDarkColor})`
          } else {
            return `rgb(${colors.primaryColor})`
          }
        }};

        :hover {
          color: rgb(${colors.whiteColor});
        }
      }
    }

    h5 {
      font-weight: 600;
      font-size: 1.2rem;
      user-select: none;
      color: rgb(${colors.textColor});

      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)`
        } else {
          return `rgb(${colors.primaryColor})`
        }
      }};
    }
  }
  
  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
    width: 90%;
    max-width: 400px;
    border-radius: 0 0 5px 5px;
    padding: 8px 10px;
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

    div {
      display: flex;
      justify-content: flex-start;
      gap: .5em;

      button {
        border-style: none;
        padding: .5em 1em;
        border-radius: 5px;
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
          color: rgba(${colors.textColor}, .8);
          font-weight: 600;

        }
      }
    }
  }
`;