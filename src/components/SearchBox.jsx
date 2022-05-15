import { HiSearch } from 'react-icons/hi';
import { StyledSearch } from '../styles/styles';
import { searchContext } from '../pages/Home';
import { useContext } from 'react';

export default function SearchBox() {
	const { searchEngine } = useContext(searchContext);
	return (
		<StyledSearch htmlFor='search'>
			<input
				onChange={searchEngine}
				type='search'
				id='search'
				placeholder='Search your notes...'
			/>
			<HiSearch />
		</StyledSearch>
	);
}
