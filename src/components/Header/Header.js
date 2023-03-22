import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to rest countries</h1>
            <nav className='menu'>
                <a href="#">Home</a>
                <a href="#">Country</a>
                <a href="#">About</a>
            </nav>
        </div>
    );
};

export default Header;