import React from 'react';
import { HeaderStyled } from '../styles/headerStyles.module';
import Button from './Button';

const Header = ({title, child, icon, element }) => {
    return (
        <HeaderStyled className='headerContainer'>
            <div> { icon } </div>
            <h1>{title}</h1>
            { child  }
        </HeaderStyled>
    );
}

export default Header;