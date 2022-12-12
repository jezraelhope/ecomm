import React from 'react';


const MainHeader = ({ setHeaderOpen }) => {
    return (
        <header className='main-header'>
            <nav className='main-header-navigation'>
                <a className='header-item' href="/" onClick={()=> setHeaderOpen(false)}>Home</a>
                <a className='header-item' href="#about" onClick={()=> setHeaderOpen(false)}>About</a>
                <a className='header-item' href="#contact" onClick={()=> setHeaderOpen(false)}>Contact</a>
                <a className='header-item' href="/products" onClick={()=> setHeaderOpen(false)}>Shop</a>
            </nav>
        </header>
    );
};

export default MainHeader;
