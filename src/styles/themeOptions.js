import styled from 'styled-components';

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
    margin: 0.5em 0;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    user-select: none;
    box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 1);
    background: rgb(${({ theme }) => theme.white});

    &:hover {
      box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
      transition: all 200ms ease;
    }

    label {
      padding-left: 2.5em;
      color: rgb(${({ theme }) => theme.text});
      position: relative;

      &:hover {
        color: rgb(${({ theme }) => theme.text});
        cursor: pointer;
      }

      svg {
        width: 1.6em;
        height: 1.6em;
        position: absolute;
        top: 0.4em;
        left: 0.5em;
        color: rgb(${({ theme }) => theme.text});
      }
    }

    input[type='radio'] {
      position: absolute;
      top: 1em;
      right: 1em;
      appearance: none;
      margin: 0;
      background: rgb(${({ theme }) => theme.background});
      width: 20px;
      height: 20px;
      border: 2px solid rgb(${({ theme }) => theme.text});
      border-radius: 50%;
      display: grid;
      place-content: center;

      &:hover {
        cursor: pointer;
      }
      &:checked::before {
        content: '';
        width: 8px;
        height: 8px;
        background: rgb(${({ theme }) => theme.text});
        border-radius: 50%;
        margin: auto;
      }
    }
  }
`;
