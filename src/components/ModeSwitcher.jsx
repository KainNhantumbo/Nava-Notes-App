import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModeSwitcherStyles } from '../styles/modeSwitcherStyles.module';
import { modeDataPicker, setDataToStorage } from '../scripts/core-functions';


const ModeSwitcher = ({ text, icon }) => {
  const modeState = modeDataPicker();
  const [ mode, setMode] = useState(() => modeState);

  const themeSwitcher = () => {
    setMode(() => {
      if (mode === 'light') {
        setMode('dark')        
      } else {
        setMode('light')
      }
    });
  }
  
  const selectState = (modes) => {
    if (modes === 'dark') {
      return true
    } else {
      return false
    }
  }
  
  useEffect(() => {
    setDataToStorage('modeData', mode)
  }, [mode]);


  return (
    <ModeSwitcherStyles>
      <div>
        { icon }
        <label htmlFor="modeswitcher">
          {text}
        </label>
        <input type="checkbox"
          id='modeswitcher'
          checked={selectState(mode)}
          onChange={themeSwitcher}
        />
      </div>
    </ModeSwitcherStyles>
  );
}

ModeSwitcher.propTypes = {
  text: PropTypes.string.isRequired
}

export default ModeSwitcher;