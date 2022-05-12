import Styled from 'styled-components';

export const NotificationContainer = Styled.section`
  @keyframes slideUp {
    from {
      transform: translateY(7em);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

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
  animation: slideUp 500ms ease-out forwards;

  section {
    width: 90%;
    max-width: 400px;
    height: 3em;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 1.2em;
    position: relative;
    background: rgb(${({theme})=> theme.text});
    box-shadow: 0 0 5px rgba(${({ theme }) => theme.fullDark}, .6);
    background: rgb(${({ theme }) => theme.background});

    svg {
      position: absolute;
      top: .4em;
      left: 1em;
      width: 35px;
      height: 35px;
      color: rgb(${({ theme }) => theme.text});
    }

    span {
      padding-left: 2em;
      font-weight: 600;
      color: rgb(${({ theme }) => theme.text});
    }

    button {
      position: relative;
      border-style: none;
      padding: .5em 1em;
      border-radius: 5px;
      font-weight: 600;
      background: transparent;
      outline: none;
      color: rgb(${({ theme }) => theme.text});
      
      :hover {
        background: rgba(${({ theme }) => theme.primary}, .3);
        transition: all 100ms ease-out;
      }
      
      span {
        padding: 0;
        padding-right: 1.2em;
      }

      svg {
        width: 1.1em;
        height: 1.1em;
        position: absolute;
        top: .6em;
        left: 4.6em;
      }
    }
  }
`;
