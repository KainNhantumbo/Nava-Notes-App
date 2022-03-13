import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';

const ThemeOptions =
  ({ defaultTheme, nanaTheme, pinkTheme, icon }) => {

    return (
      <StyledLabelsContainer>
        <div>
          { icon }
          <label htmlFor="defaultTheme">
            Default Theme
          </label>
          <input type="radio" name="theme"
            id='defaultTheme'
            value={defaultTheme}
          />
        </div>
        <div>
          { icon }
          <label htmlFor="nanaTheme">
            Nana Theme
          </label>
          <input type="radio" name="theme"
            id='nanaTheme'
            value={pinkTheme}
          />
        </div>
        <div>
          { icon }
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