import React from 'react';
import { StyledLabelsContainer } from '../styles/themeOptions';
import { useState, useEffect } from 'react';
import { sortDataPicker, setDataToStorage } from '../scripts/core-functions';
import {
	HiSortDescending,
	HiSortAscending,
	HiArrowDown,
	HiArrowUp,
} from 'react-icons/hi';

const SortOptions = () => {
	const sortData = sortDataPicker();
	const [value, setValue] = useState(sortData);

	// sets the default checkbox state based its current value
	const getSortConfig = (value) => {
		let sort_data = JSON.parse(localStorage.getItem('sortData'));
		if (!sort_data || sort_data === undefined) {
			sort_data = 'crescentTitle';
		}
		if (value === sort_data) {
			return true;
		}
		return false;
	};

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
				<input
					type='radio'
					name='sort'
					id='decrescentTitle'
					value='decrescentTitle'
					defaultChecked={getSortConfig('decrescentTitle')}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='crescentTitle'>
					By title (ascending)
					<HiSortAscending />
				</label>
				<input
					type='radio'
					name='sort'
					id='crescentTitle'
					value='crescentTitle'
					defaultChecked={getSortConfig('crescentTitle')}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='firstModification'>
					By first modification
					<HiArrowUp />
				</label>
				<input
					type='radio'
					name='sort'
					id='firstModification'
					value='firstModification'
					defaultChecked={getSortConfig('firstModification')}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='lastModification'>
					By last modification
					<HiArrowDown />
				</label>
				<input
					type='radio'
					name='sort'
					id='lastModification'
					value='lastModification'
					defaultChecked={getSortConfig('lastModification')}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</StyledLabelsContainer>
	);
};

export default SortOptions;
