import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { HeaderStyled } from '../styles/header';
import SearchBox from './SearchBox';

const Header = () => {
	return (
		<HeaderStyled className='headerContainer'>
			<div>
				<FaEdit />
			</div>
			<h1>Notes</h1>
			<SearchBox />
		</HeaderStyled>
	);
};

export default Header;
