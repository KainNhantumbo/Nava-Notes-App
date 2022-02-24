import React from 'react';
import { HeaderStyled } from '../styles/styles';

const Header = ({title, child }) => {
    return (
        <HeaderStyled className='headerContainer'>
            <h1>{title}</h1>
            { child  }
        </HeaderStyled>
    );
}

export default Header;