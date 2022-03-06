import styled from 'styled-components';
import { colors } from './colors';

export const HeaderStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(120deg, rgb(${colors.secondaryColor}) 12%, rgb(${colors.primaryColor}) 160%);
  box-shadow: 0 0px 5px rgba(${colors.primaryColor}, .6);
  position: fixed;
  top: 0;
  z-index: 50;
  color: rgb(${colors.textColor});
  border-radius: 0 0 12px 12px;

  div {
    position:  absolute;
    top: 1em;
    left: 5em;
    
    svg {
      width: 2em;
      height: 2em;
      color: rgb(${colors.primaryColor});
      transform: rotateY('160 deg');
    }
  }

  h1 {
    font-weight: 600;
    line-height: 2rem;
    user-select: none;
    padding-left: .5em;
    font-size: 1.6rem;
  }
`;