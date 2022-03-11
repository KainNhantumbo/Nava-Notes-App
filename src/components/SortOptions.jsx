import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';
import { useState, useEffect } from 'react';
import { sortDataPicker, setDataToStorage } from '../scripts/core-functions';

const SortOptions = () => {
  const sortData = sortDataPicker();
  const [value, setValue] = useState(sortData);
  console.log(value);
  
  const selectRadioOption = (pattern) => {
    if (pattern === 'crescentTitle') {
      return true;
    } else if (pattern === 'decrescentTitle') {
      return true;
    } else if (pattern === 'firstModification') {
      return true;
    } else if (pattern === 'lastModification') {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    setDataToStorage('sortData', value);
  }, [value]);

  return (
    <StyledLabelsContainer>
      <div>
        <label htmlFor='decrescentTitle'>
          By title (descending)
        </label>
        <input type="radio" name="sort"
          id='decrescentTitle'
          value='decrescentTitle'
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='crescentTitle'>
          By title (ascending)
        </label>
        <input type="radio" name="sort"
          id='crescentTitle'
          value='crescentTitle'
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='firstModification'>
          By first modification
        </label>
        <input type="radio" name="sort"
          id='firstModification'
          value='firstModification'
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='lastModification'>
          By last modification
        </label>
        <input type="radio" name="sort"
          id='lastModification'
          value='lastModification'
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </StyledLabelsContainer>
  );
}

export default SortOptions;