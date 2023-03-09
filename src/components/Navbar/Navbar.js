import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    const [ isMobile, setIsMobile] = useState(false);

    return (
      <nav className="navbar">
        <h3 className="logo">MARKET PLACE</h3>
        <ul className={isMobile? "nav-links-mobile": "nav-links"}
        onClick={() => setIsMobile(false)}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/skins" className="skins">
                <li>Skins</li>
            </Link>
            <Link to="/support" className="support">
                <li>Support</li>
            </Link>
            <Link to="/contacts" className="contacts">
                <li>Contacts</li>
            </Link>
            <Link to="/login" className="login">
                <li>Log In</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
        </button>
      </nav>
    );
  }
  
  export default Navbar;

