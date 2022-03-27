import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  html {
    ::-webkit-scrollbar {
      background: rgb(${colors.primaryColor});
      width: .2em;
    }

    ::-webkit-scrollbar-thumb {
      background: rgb(${colors.secondaryColor});
      border-radius: 12px;
      
      &:hover {
        background-color: rgba(${colors.fullDarkColor}, .9);
        opacity: 0.2;
      }
    }
  }

  body {
    font-family: 'PT Sans', 'Montserrat', monospace, sans-serif;
    background-color: rgb(${colors.backgroundColor});
    position: relative;
  }
`;