import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';

const ThemeOptions =
  ({ defaultTheme, nanaTheme, pinkTheme }) => {

    return (
      <StyledLabelsContainer>
        <div>
          <label htmlFor="defaultTheme">
            Default Theme
          </label>
          <input type="radio" name="theme"
            id='defaultTheme'
            value={defaultTheme}
          />
        </div>
        <div>
          <label htmlFor="nanaTheme">
            Nana Theme
          </label>
          <input type="radio" name="theme"
            id='nanaTheme'
            value={pinkTheme}
          />
        </div>
        <div>
          <label htmlFor="pinkTheme">
            PinkSleep Theme
          </label>
          <input type="radio" name="theme"
            id='pinkTheme'
            value={nanaTheme}
          />
        </div>
      </StyledLabelsContainer>
    );
  }

export default ThemeOptions;