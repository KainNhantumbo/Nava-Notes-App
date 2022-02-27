import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';

const ThemeOptions =
  ({ defaultTheme, nanaTheme, pinkTheme }) => {

    return (
      <StyledLabelsContainer>
        <label htmlFor="defaultTheme">
          Default Theme
          <input type="radio" name="theme"
          id='defaultTheme'
           value={defaultTheme} 
          />
        </label>
        <label htmlFor="nanaTheme">
          Nana Theme
          <input type="radio" name="theme"
          id='nanaTheme' 
          value={pinkTheme}
          />
        </label>
        <label htmlFor="pinkTheme">
          PinkSleep Theme
          <input type="radio" name="theme" 
          id='pinkTheme'
          value={nanaTheme} 
          />
        </label>
      </StyledLabelsContainer>
    );
  }

export default ThemeOptions;