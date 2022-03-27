import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModeSwitcherStyles } from '../styles/modeSwitcher';
import { modeDataPicker, setDataToStorage } from '../scripts/core-functions';
import { HiSun } from 'react-icons/hi';


const ModeSwitcher = ({ text }) => {
  const modeState = modeDataPicker();
  const [mode, setMode] = useState(() => modeState);

  const themeSwitcher = () => {
    setMode(() => {
      if (mode === 'light') {
        setMode('dark');
      } else {
        setMode('light');
      }
    });
  }
  
  const selectState = (modes) => {
    if (modes === 'dark') {
      return true;
    } else {
      return false;
    }
  }
  
  useEffect(() => {
    setDataToStorage('modeData', mode);
  }, [mode]);
  
  return (
    <ModeSwitcherStyles>
      <div>
        <label htmlFor="modeswitcher">
          {text}
          <HiSun />
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