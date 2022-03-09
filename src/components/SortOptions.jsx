import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';
import { useState, useEffect } from 'react';
import { setDataToStorage, getDataFromStorage } from '../scripts/core-functions';

const SortOptions = () => {
  const sortData = getDataFromStorage('sortData');
  const [option, setOption] = useState(sortData);
  useEffect(() => {
    if (option.length !== 0) {
      setDataToStorage('sortData', option)
    }
  }, [option]);

  function checkOption (value) {
    let status;

    switch ( value ) {
      case 'crescentTitle':
        status = 'checked';
        break;
      case 'decrescentTitle':
        status = 'checked';
        break;
      case 'firstModification':
        status = 'checked';
        break;
      case 'lastModification':
        status = 'checked';
        break;
      default:
      return;
    }
    return status;
  }

  return (
    <StyledLabelsContainer>
      <div>
        <label htmlFor='decrescentTitle'>
          By title (descending)
        </label>
        <input type="radio" name="sort"
          id='decrescentTitle'
          value='decrescentTitle'
          onChange={e => setOption({value: e.target.value, checked: 'checked'})}
        />
      </div>
      <div>
        <label htmlFor='crescentTitle'>
          By title (ascending)
        </label>
        <input type="radio" name="sort"
          id='crescentTitle'
          value='crescentTitle'
          onChange={e => setOption({value: e.target.value, checked: 'checked'})}
        />
      </div>
      <div>
        <label htmlFor='firstModification'>
          By first modification
        </label>
        <input type="radio" name="sort"
          id='firstModification'
          value='firstModification'
          onChange={e => setOption({value: e.target.value, checked: 'checked'})}
        />
      </div>
      <div>
        <label htmlFor='lastModification'>
          By last modification
        </label>
        <input type="radio" name="sort"
          id='lastModification'
          value='lastModification'
          onChange={e => setOption({value: e.target.value, checked: 'checked'})}
        />
      </div>
    </StyledLabelsContainer>
  );
}

export default SortOptions;