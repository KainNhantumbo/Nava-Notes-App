import React from 'react';
import SearchSvg from '../svgs/search.svg';

const Header = ({title}) => {
    return (
        <div className="headerContainer">
            <h1>{title}</h1>
            <label htmlFor="search">
                <input type="text" id="search" placeholder="Search"/>
                <button>
                    <img src={SearchSvg} alt="searchIcon" />
                </button>
            </label>
        </div>
    );
}

export default Header;