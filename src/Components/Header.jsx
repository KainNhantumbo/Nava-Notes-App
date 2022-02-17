import React from 'react';

const Header = () => {

    
    return(
        <div className="headerContainer">
            <h1>Tiny Notes</h1>
            <div className="searchContainer">
                <label htmlFor="search">
                    <input type="text" />
                    <button>
                        Search
                    </button>
                </label>
            </div>
        </div>
    )
}

export default Header;