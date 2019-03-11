import React from 'react';

import Humbutton from './Humbutton';
import './Navbar.css';

import { Link } from 'react-router-dom'

const Navbar = props => (
  <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <Humbutton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/">CarTrack</Link></div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
            <ul>
            <Link to="/"> Home </Link>
              <Link to="/teams"> Team </Link>
            </ul>
        </div>
      </nav>
  </header>
)

export default Navbar;