import React from 'react';
import PropTypes from 'prop-types';
import { ModeSwitcherStyles } from '../styles/modeSwitcherStyles.module';

const ModeSwitcher = ({ text, action }) => {
  return (
    <ModeSwitcherStyles>
      <div>
        <label htmlFor="modeswitcher">
          {text}
        </label>
        <input type="checkbox"
          id='modeswitcher'
        />
      </div>
    </ModeSwitcherStyles>
  );
}

ModeSwitcher.propTypes = {
  text: PropTypes.string.isRequired
}

export default ModeSwitcher;