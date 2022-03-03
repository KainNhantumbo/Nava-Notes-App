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

      :hover {
        background-color: rgb(${colors.secondaryColor});
      }

      svg {
        width: 20px;
        height: 20px;
        stroke-width: 1px;
        color: rgb(${colors.primaryColor});

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
    }
  }
  
  .toolbar {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 90%;
    max-width: 400px;
    background: rgb(${colors.backgroundColor});
    border-radius: 0 0 5px 5px;
    padding: 8px 10px;

    div {
      display: flex;
      justify-content: flex-start;
      gap: .5em;

      button {
        border-style: none;
        padding: .4em .5em;
        border-radius: 5px;
        background: rgba(${colors.secondaryColor}, .4);

        :hover {
          background: rgba(${colors.secondaryColor}, .6);
          transform: scale(1.05);
          transition: all 100ms ease-out;

        }
        
        span {
          color: rgb(${colors.textColor});

        }
      }
    }
  }
`;