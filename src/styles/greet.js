import Styled from 'styled-components';

export const GreetContainer = Styled.section`
  display: grid;
  max-width: 15em;
  margin: 0 auto;

  span {
    padding: .5em;
    font-size: .8rem;
    text-transform: capitalize;
    background: rgba(${({ theme }) => theme.primary}, .3);
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    color: rgb(${({ theme }) => theme.text});
  }
`;
