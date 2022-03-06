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
    padding: 2px 5px 5px 28px;
    line-height: 5em;
      
    &:focus {
      box-shadow: 0 0 5px 1px rgba(${colors.primaryColor}, .7);
      outline: none;
    }
    &::placeholder {
      font-weight: 600;
      color: rgba(${colors.primaryColor} .9);
    }
  }

  svg {
    position: absolute;
    left: 8px;
    top: 7px;
    stroke-width: .5px;
    color: rgb(${colors.primaryColor});
  }
`;

export const AddNoteButton = styled.div`
  position: relative;
  z-index: 60;

  button {
    border-style: none;
    position: fixed;
    top: .9em;
    right: 1.2em;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: grid;
    place-content: center;

    :hover {
      transform: scale(1.05);
      transition: all .2s ease-out;
      box-shadow: 0 0 5px rgba(${colors.primaryColor}, .5);
    }

    svg {
      width: 20px;
      height: 20px;
      color: rgb(${colors.primaryColor});
    }
  }
`;