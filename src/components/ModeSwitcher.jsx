import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModeSwitcherStyles } from '../styles/modeSwitcherStyles.module';
import { modePicker, setDataToStorage } from '../scripts/core-functions';


const ModeSwitcher = ({ text, action }) => {
  const modeState = modePicker();
  const [ mode, setMode] = useState(modeState);

  const themeSwitcher = () => {
    setMode(() => {
      if (mode.value === 'light') {
        setMode({value: 'dark', checked: true})        
      } else {
        setMode({value: 'light', checked: false})
      }
    })
  }
  
  useEffect(() => {
    setDataToStorage('modeData', mode)
  }, [mode])


  return (
    <ModeSwitcherStyles>
      <div>
        <label htmlFor="modeswitcher">
          {text}
        </label>
        <input type="checkbox"
          id='modeswitcher'
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