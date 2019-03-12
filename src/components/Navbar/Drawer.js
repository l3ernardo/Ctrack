import React from 'react';
import './Drawer.css'

import { Link } from 'react-router-dom'


const Drawer = props => {

console.log("props : " , props);
//<Link onClick={this.handleClick.bind(this)} />
console.log("Drawer props : ", props);
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses= 'side-drawer open';
    }
  return (
    <nav className={drawerClasses}>
        <ul>       
          <li>
            <Link to="/" onClick={props.close}> Home </Link>
          </li>
          <li>
              <Link to="/teams" onClick={props.close}> Team </Link>
          </li>
        </ul>
    </nav>
  );
};

export default Drawer;





















/*


        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

*/