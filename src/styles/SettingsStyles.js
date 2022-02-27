import styled from 'styled-components';
import { colors } from './colors';

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: cnter;
  align-items: center;

  section {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    max-width: 400px;
    margin-top: 12vh;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 5px;
    box-shadow: 0 0 5px .1px rgba(${colors.primaryColor}, .5);

    span {
      color: rgb(${colors.textColor});
      font-size: 1.1rem;
      font-weight: 500;
      padding-left: .5em;
    }

    div {
      position: absolute;
      top: 15px;
      right: 2em;

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
          transition: all .5s ease;
        }

        :checked::after {
          transform: scale(1.1) translateX(25px);
        }  
      }
    }
  }
`;