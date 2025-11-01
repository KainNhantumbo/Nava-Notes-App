import styled from 'styled-components';

export const StyledTextAreaContainer = styled.section`
  * {
    box-sizing: border-box;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;

  &:focus {
    border: rgb(${({ theme }) => theme.primary});
    box-shadow: 0px 0px 5px 2px rgb(${({ theme }) => theme.shadows});
    outline: none;
    transition: all 0.5s ease;
  }

  input,
  textarea {
    width: 90%;
    max-width: 400px;
    border-style: none;
    outline: none;
    padding: 10px;
    color: rgb(${({ theme }) => theme.text});
    background: rgb(${({ theme }) => theme.white});

    &::placeholder {
      color: rgba(${({ theme }) => theme.text}, 0.5);
    }
  }

  input {
    padding-right: 20px;
    border-radius: 10px 10px 0 0;
    font-size: 16pt;
  }

  textarea {
    resize: none;
    line-height: 1.6rem;
    font-size: 12pt;

    &::-webkit-scrollbar {
      background: transparent;
      padding: 5px;
      border-radius: 8px;
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(${({ theme }) => theme.primary});
      border-radius: 12px;
      cursor: pointer;

      &:hover {
        background: rgba(${({ theme }) => theme.primary}, 0.5);
      }
    }
  }
`;
