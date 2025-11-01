import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    &::-webkit-scrollbar {
      background: rgb(${({ theme }) => theme.primary});
      width: .2em;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(${({ theme }) => theme.secondary});
      border-radius: 12px;

      &:hover {
        background-color: rgb(${({ theme }) => theme.fullDark});
        opacity: 0.2;
      }
    }
  }

  body {
    font-family: 'Roboto Slab', Inter,'PT Sans', 'Montserrat', sans-serif;
    background-color:rgb(${({ theme }) => theme.background});
    position: relative;
  }

  #root {
    position: relative;
  }
`;
