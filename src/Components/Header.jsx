import React from 'react';

const Header = () => {

    return(
        <div className="headerContainer">
            <h1>Tiny Notes</h1>
            <label htmlFor="search">
                <input type="text" id="search"/>
                <button>
                    <img src='./svgs/search.svg' alt="search" />
                </button>
            </label>
        </div>
    )
}

export default Header;