import { useState, useEffect } from 'react';
import { StyledLabelsContainer as Container } from '../styles/themeOptions';
import { sortDataPicker, setDataToStorage } from '../scripts/core-functions';
import {
  HiSortDescending,
  HiSortAscending,
  HiArrowDown,
  HiArrowUp
} from 'react-icons/hi';

const sortOptionsData = [
  {
    id: 'decrescentTitle',
    name: 'By title (descending)',
    icon: <HiSortDescending />
  },
  {
    id: 'crescentTitle',
    name: 'By title (ascending)',
    icon: <HiSortAscending />
  },
  {
    id: 'firstModification',
    name: 'By first modification',
    icon: <HiArrowUp />
  },
  {
    id: 'lastModification',
    name: 'By last modification',
    icon: <HiArrowDown />
  }
];

export default function SortOptions() {
  const sortData = sortDataPicker();
  const [value, setValue] = useState(sortData);

  // sets the default checkbox state based its current value
  const getSortConfig = (value) => {
    const sort_data =
      JSON.parse(localStorage.getItem('sortData')) || 'crescentTitle';
    if (value === sort_data) return true;
    return false;
  };

  useEffect(() => {
    setDataToStorage('sortData', value);
  }, [value]);

  return (
    <Container>
      {sortOptionsData.map(({ id, name, icon }) => (
        <div key={id}>
          <label htmlFor={id}>
            {name}
            {icon}
          </label>
          <input
            type='radio'
            name='sort'
            id={id}
            value={id}
            defaultChecked={getSortConfig(id)}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ))}
    </Container>
  );
}
