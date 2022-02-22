import React from 'react';
import SearchSvg from '../svgs/search.svg';
import { HeaderStyled } from '../Styled/styles';

const Header = ({title}) => {
    return (
        <HeaderStyled className='headerContainer'>
            <h1>{title}</h1>
            <label htmlFor="search">
                <input type="text" id="search" placeholder="Search"/>
                <button>
                    <img src={SearchSvg} alt="searchIcon" />
                </button>
            </label>
        </HeaderStyled>
    );
}

export default Header;