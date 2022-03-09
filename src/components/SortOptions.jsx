import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';
import { useState } from 'react';

const SortOptions = () => {
  const [option, setOption] = useState()
  return (
    <StyledLabelsContainer>
      <div>
        <label htmlFor='decrescentTitle'>
          By title (descending)
        </label>
        <input type="radio" name="sort"
          id='decrescentTitle'
          value='decrescentTitle'
          checked={option === 'decrescentTitle'}
          onChange={e => setOption(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='crescentTitle'>
          By title (ascending)
        </label>
        <input type="radio" name="sort"
          id='crescentTitle'
          value='crescentTitle'
          checked={option === 'crescentTitle'}
          onChange={e => setOption(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='firstModification'>
          By first modification
        </label>
        <input type="radio" name="sort"
          id='firstModification'
          value='firstModification'
          checked={option === 'firstModification'}
          onChange={e => setOption(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='lastModification'>
          By last modification
        </label>
        <input type="radio" name="sort"
          id='lastModification'
          value='lastModification'
          checked={option === 'lastModification'}
          onChange={e => setOption(e.target.value)}
        />
      </div>
    </StyledLabelsContainer>
  );
}

export default SortOptions;