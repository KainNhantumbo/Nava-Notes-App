import React from 'react';
import { HeaderStyled } from '../styles/header';

const Header = ({ title, child, icon }) => {
	return (
		<HeaderStyled className='headerContainer'>
			<div>{icon}</div>
			<h1>{title}</h1>
			{child}
		</HeaderStyled>
	);
};

export default Header;
