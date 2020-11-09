import React from 'react';
import Logo from '../static/Logo.png'

const Navbar = ({ links }) => {

    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={Logo} alt="Not Found" />
            </div>
            <ul className="nav-links">
                {
                    links.map((link, i) => <li key={i}>{link}</li>)
                }


            </ul>
        </nav>
    )
}

export default Navbar;