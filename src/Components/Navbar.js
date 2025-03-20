import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='navBar' role='navigation' aria-label='main navigation'>
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/games" className="navbar-item">
                    Games
                </Link>
                <Link to="/about" className="navbar-item">
                    About
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;