import React from 'react';
import { HeaderStyled } from '../styles/styles';
import { SearchBox } from './SearchBox';

const Header = ({title, inputEvent, buttonEvent}) => {
    return (
        <HeaderStyled className='headerContainer'>
            <h1>{title}</h1>
            <SearchBox 
                inputEvent={ inputEvent }
                buttonEvent={ buttonEvent }
            />
        </HeaderStyled>
    );
}

export default Header;