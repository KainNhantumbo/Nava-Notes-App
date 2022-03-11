import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModeSwitcherStyles } from '../styles/modeSwitcherStyles.module';
import { modePicker, setDataToStorage } from '../scripts/core-functions';


const ModeSwitcher = ({ text }) => {
  const modeState = modePicker();
  const [ mode, setMode] = useState(() => modeState);
  console.log(mode)

  const themeSwitcher = () => {
    setMode(() => {
      if (mode === 'light') {
        setMode('dark')        
      } else {
        setMode('light')
      }
    });
  }
  
  function selectState(modes) {
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