import styled from 'styled-components';

export const MessageContainer = styled.section`
  position: relative;
  display: flex;
  width: 12em;
  height: 12em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 9em;
  margin-bottom: 0.5em;
  padding: 1em;
  border-radius: 50%;
  user-select: none;
  gap: 0.8em;
  background-color: rgba(${({ theme }) => theme.secondary}, 0.1);

  svg {
    position: absolute;
    width: 5em;
    height: 5em;
    top: 1.2em;
    left: calc(12em - 7.5em);
    color: rgb(${({ theme }) => theme.text});
  }
  span {
    padding-top: 5em;
    text-align: center;
    font-weight: 600;
    color: rgb(${({ theme }) => theme.text});
    line-height: 1.4rem;
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
    background-color: rgba(${({ theme }) => theme.inner}, 0.8);
    color: rgb(${({ theme }) => theme.text});

    &:focus {
      box-shadow: 0 0 5px rgb(${({ theme }) => theme.fullDarl}, 0.6);
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: rgb(${({ theme }) => theme.text});
    }
  }

  svg {
    position: absolute;
    left: 8px;
    top: 7px;
    stroke-width: 0.5px;
    color: rgb(${({ theme }) => theme.text});
  }
`;

export const AddNoteButton = styled.div`
  position: relative;
  z-index: 60;

  button {
    border-style: none;
    position: fixed;
    top: 0.9em;
    right: 1.2em;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: grid;
    place-content: center;
    background: rgb(${({ theme }) => theme.inner});

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-out;
      box-shadow: 0 0 5px rgb(${({ theme }) => theme.white});
    }

    svg {
      width: 20px;
      height: 20px;
      color: rgb(${({ theme }) => theme.primary});
    }
  }
`;
