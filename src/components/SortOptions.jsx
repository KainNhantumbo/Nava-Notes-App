import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';
import { useState, useEffect } from 'react';
import { sortDataPicker, setDataToStorage } from '../scripts/core-functions';
import { HiSortDescending, HiSortAscending, HiArrowDown, HiArrowUp } from 'react-icons/hi';

const SortOptions = () => {
  const sortData = sortDataPicker();
  const [value, setValue] = useState(sortData);

  // const selectRadioOption = (pattern) => {
  //   const patterns = ['crescentTitle', 'decrescentTitle', 'firstModification', 'lastModification'];
  //   const validate = patterns.forEach(element => {
  //     if (element === pattern)
  //       return true;
  //   });
  //   return validate;
  // }

  useEffect(() => {
    setDataToStorage('sortData', value);
  }, [value]);

  return (
    <StyledLabelsContainer>
      <div>

        <label htmlFor='decrescentTitle'>
          By title (descending)
          <HiSortDescending />
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
          <HiSortAscending />
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
          <HiArrowUp />
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
          <HiArrowDown />
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