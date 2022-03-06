import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';

const SortOptions = () => {
  return (
    <StyledLabelsContainer>
      <div>
        <label htmlFor="defaultSort">
          By title (descending)
        </label>
        <input type="radio" name="sort"
          id='defaultSort'
          value='defaultSort'
          checked='true'
        />
      </div>
      <div>
        <label htmlFor="titleAscending">
          By title (ascending)
        </label>
        <input type="radio" name="sort"
          id='titleAscending'
          value='titleAscending'
        />
      </div>
      <div>
        <label htmlFor="firstModification">
          By first modification
        </label>
        <input type="radio" name="sort"
          id='firstModification'
          value='firstModification'
        />
      </div>
      <div>
        <label htmlFor="lastModification">
          By last modification
        </label>
        <input type="radio" name="sort"
          id='lastModification'
          value='lastModification'
        />
      </div>
    </StyledLabelsContainer>
  );
}

export default SortOptions;