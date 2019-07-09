import React from 'react';

import Humbutton from './Humbutton';
import './Navbar.css';

import { Link } from 'react-router-dom'

const Navbar = props => {

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <Humbutton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">User Tracker</Link>
        </div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
            <ul className="right">
              <Link to="/teams"> Users </Link>
              <Link to="/about"> About </Link>
            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;