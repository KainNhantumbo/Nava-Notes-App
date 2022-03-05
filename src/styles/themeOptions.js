import styled from 'styled-components';
import { colors } from './colors';

export const StyledLabelsContainer = styled.section`
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
    margin: .5em 0;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    user-select: none;
    box-shadow: 0 0 5px .1px rgba(${colors.primaryColor}, .5);

    label {
      padding-left: .5em;

      :hover {
        color: rgb(${colors.secondaryColor});
      }
    }

    input[type="radio"] {
      position: absolute;
      top: 1em;
      right: 1em;
      appearance: none;
      margin: 0;
      background: rgb(${colors.backgroundColor});

      width: 20px;
      height: 20px;
      border: 2px solid rgb(${colors.secondaryColor});
      border-radius: 50%;

      display: grid;
      place-content: center;

      :checked::before {
        content: '';
        width: 8px;
        height: 8px;
        background: rgb(${colors.secondaryColor});
        border-radius: 50%;
        margin: auto;
      }

    }
  }
`;