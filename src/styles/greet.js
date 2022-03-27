import Styled from 'styled-components';
import { colors } from './colors';

export const GreetContainer = Styled.section `
  display: grid;
  max-width: 15em;
  margin: 0 auto;

  span {
    padding: .5em;
    font-size: .8rem;
    text-transform: capitalize;
    background: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.primaryColor}, .3)` 
      } else {
        return `rgba(${colors.primaryColor}, .1)`
      }
    }};
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    color: rgba(${colors.textColor}, .8);
  }
`;