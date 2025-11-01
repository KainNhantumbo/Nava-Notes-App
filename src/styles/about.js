import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 90%;
    max-width: 400px;
    margin: 0.5em 0;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    color: rgb(${({ theme }) => theme.text});
    user-select: none;
    box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
    background: rgb(${({ theme }) => theme.white});

    section {
      text-align: center;
      font-weight: 600;
      color: rgb(${({ theme }) => theme.primary});
      line-height: 1.6rem;

      span {
        padding: 2px 8px;
        padding-left: 1em;
        border-radius: 12px;
        position: relative;
        color: rgb(${({ theme }) => theme.text});

        svg {
          width: 1.2em;
          height: 1.2em;
          position: absolute;
          top: 0.15em;
          left: -0.4em;
          color: rgb(${({ theme }) => theme.text});
        }
      }
    }
  }
`;
