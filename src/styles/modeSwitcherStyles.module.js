import styled from 'styled-components';
import { colors } from './colors';

export const ModeSwitcherStyles = styled.section`
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
    margin-top: 12vh;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    user-select: none;
    box-shadow: 0 0 5px rgba(${colors.primaryColor}, .5);

    border-left: 2px solid transparent;
    border-right: 2px solid transparent;

    :hover {
      border-left: 2px solid rgb(${colors.secondaryColor});
      border-right: 2px solid rgb(${colors.secondaryColor});
    }

    label {
      padding-left: .5em;

      :hover {
        color: rgb(${colors.secondaryColor});
      }
    }

    input[type="checkbox"] {
      position: relative;
      width: 45px;
      height: 20px;
      appearance: none;
      -moz-appearance: none;
      background: rgba(${colors.primaryColor}, .1);
      outline: none;
      border-radius: 15px;
      box-shadow: inset 0 0 5px rgba(${colors.fullDarkColor}, .2);
      transition: .5s ease;
      margin-top: .4em;
      margin-right: .2em;

      :checked {
        background: rgb(${colors.secondaryColor});
      }
      
      ::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        transform: scale(1.1);
        border-radius: 50%;
        top: 0;
        left: 0;
        background: rgb(${colors.whiteColor});
        box-shadow:  0 0 5px rgba(${colors.primaryColor}, .5);
        transition: all .2s ease;
      }

      :checked::after {
        transform: scale(1.1) translateX(25px);
      }
    }
  }
`;