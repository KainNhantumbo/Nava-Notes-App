import styled from 'styled-components';
import { colors } from './colors';

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(${colors.whiteColor});
  margin-bottom: .5em;
  padding: 1em;
  border-radius: inherit;
  user-select: none;
  gap: .8em;

  img {
    width: 80%;
  }
  span {
    text-align: center;
    font-weight: 600;
    background-color: rgba(${colors.brownColor}, .9);
    padding: .5em;
    border-radius: 10px;
    line-height: 1.2rem;
  }
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgb(${colors.secondaryColor});
  box-shadow: 0 1px 2px 0.5px rgba(${colors.primaryColor}, .6);
  position: fixed;
  top: 0;
  z-index: 50;

  h1 {
    font-weight: 600;
    margin: 0 auto;
    line-height: 4rem;
    user-select: none;
  }   
`;

export const StyledSearch = styled.label`
  width: 15em;
  height: 1.9em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1em;
  position: relative;

  input {
    width: inherit;
    border-style: none;
    border: none;
    border-radius: 15px;
    padding: 5px 40px 5px 10px;
    line-height: 5em;
      
    &:focus {
      box-shadow: 0 0 5px 1px rgba(${colors.primaryColor} .9);
      outline: none;
    }
    &::placeholder {
      font-weight: 600;
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    background-color: rgba(${colors.secondaryColor}, .5);
    border-style: none;
    border-radius:  50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(${colors.primaryColor}, .3);
      transition: all .2s ease;
    }
    svg {
      padding: .2em;
      stroke-width: .5px;
      color: rgb(${colors.primaryColor})
    }
  }
`;

export const StyledTextAreaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    width: 90%;
    max-width: 400px;
    margin-top: 12vh;
    border-style: none;
    background-color: rgb(${colors.whiteColor});
    border-radius: 12px;
    resize: none;
    padding: 10px;
    line-height: 1.6rem;
    box-shadow: 0px 0px 5px 1px rgba(${colors.primaryColor}, .5);

    
    :focus {
      border: rgb(${colors.darkColor});
      box-shadow: 0px 0px 5px 2px rgba(${colors.secondaryColor}, .8);
      outline: none;
      transition: all .5s ease;
    }
  }
`;

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
    padding: 8px;
    line-height: 2em;
    border-radius: 12px;
    box-shadow: 0 0 5px .1px rgba(${colors.primaryColor}, .5);

    span {
      color: rgb(${colors.textColor});
      font-size: 1.1rem;
      font-weight: 500;
      padding-left: .5em;
    }

    div {
      position: absolute;
      top: 12px;
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
          right: 0;
          background: rgb(${colors.whiteColor});
          box-shadow:  0 0 5px rgba(${colors.primaryColor}, .5);
          transition: all .5s ease;
        }

        :checked::after {
          left: 0;
        }
        
      }
    }
  }
`;