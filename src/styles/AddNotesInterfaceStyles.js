import styled from "styled-components";
import { colors } from "./colors";

export const InterfaceStyles = styled.section`
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

    }
  }
  
`;