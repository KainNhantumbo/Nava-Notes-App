import styled from 'styled-components';
import { colors } from './colors';

export const FooterStyles = styled.footer`
  width: 100vw;
  height: 9vh;
  position: fixed;
  bottom: 0;
  z-index: 50;
  display: grid;
  place-content: center;

  section {
    width: 96vw;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgb(${colors.whiteColor});
    box-shadow: 0 0 5px rgba(${colors.primaryColor}, .6);
    
    border-radius: 12px;
    margin-bottom: .5em;
    padding: .2em 0;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: .2em .5em;
      
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: rgb(${colors.whiteColor});
        opacity: .9;
        transition: all .2s ease-out;
      }

      button {
        border: none;
        background: rgba(${colors.whiteColor}, .6);
        border-radius: 50%;
        position: relative;
        padding: .6em;
        cursor: pointer;
        display: grid;
        place-content: center;
        width: 30px;
        height: 30px;
        margin: auto 0;

        :hover {
          transform: scale(1.1, 1.1);
          transition: all .2s ease-out;
        }

        svg {
          width: 26px;
          height: 26px;
          top: calc(50% - 13px);
          left: calc(50% - 13px);
          fill: rgb(${colors.primaryColor});
          user-select: none;
          pointer-events: none;
        }
      }
      span{
        font-weight: 600;
        font-size: .8rem;
        margin-top: .3em;
        letter-spacing: .02rem;
      }
    } 
  }
`;