import React from 'react'
import './Navbar.css';
import Humbutton from './Humbutton';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
      <div className="humbar__toggle-button">
      <Humbutton />
      </div>
        <div className="navbar__logo"><Link to="/"> CarTrack System </Link></div>
        <div className="spacer"/>
        <div className="navbar_navigation-items">
            <ul>
              <Link to="/"> Home </Link>
              <Link to="/teams"> Team </Link>
              <Link to="/about"> About </Link>
            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;





