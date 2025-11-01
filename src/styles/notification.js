import styled from 'styled-components';

export const NotificationContainer = styled.section`
  width: 100vw;
  height: 10vh;
  margin-top: 80vh;
  background: none;
  z-index: 52;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  justify-items: center;
  align-items: center;

  section {
    width: 90%;
    max-width: 300px;
    height: 3em;
    border-radius: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 1.2em;
    position: relative;
    background: rgb(${({ theme }) => theme.text});
    box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
    background: rgb(${({ theme }) => theme.background});
    border: 1px solid rgba(${({ theme }) => theme.primary}, 0.3);

    svg {
      position: absolute;
      top: 12px;
      left: 8px;
      width: 25px;
      height: 25px;
      color: rgb(${({ theme }) => theme.text});
    }

    span {
      padding-left: 50px;
      font-weight: 500;
      color: rgb(${({ theme }) => theme.text});
    }

    button {
      position: absolute;
      top: calc(50% - 16px);
      right: 10px;
      border-style: none;
      padding: 0.5em 1em;
      border-radius: 5px;
      font-weight: 600;
      background: transparent;
      outline: none;
      color: rgb(${({ theme }) => theme.text});

      &:hover {
        background: rgba(${({ theme }) => theme.primary}, 0.3);
        transition: all 100ms ease-out;
        cursor: pointer;
      }

      span {
        padding: 0;
        padding-right: 1.2em;
      }

      svg {
        width: 1.1em;
        height: 1.1em;
        position: absolute;
        top: 0.6em;
        left: 5.2em;
      }
    }
  }
`;
