import styled from 'styled-components';
import { colors } from './colors';

export const SettingsContainer = styled.div`
  .settingsBody {
    margin-top: .5em;
    margin-bottom: 5em;
    display: grid;

    h2 {
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgb(${colors.primaryColor})`
        } else {
          return `rgb(${colors.textColor})`
        }
      }};
      margin: 0 auto;
      margin-top: 1.2em;
      font-weight: 500;
      background-color: rgb(${colors.backgroundColor});
    }
  }
`;