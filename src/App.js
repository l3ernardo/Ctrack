import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Drawer from './components/Navbar/Drawer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Teams from './components/Teams';
import Users from './components/Page/Users';
import About from './components/About';
import Userform from './components/Page/Userform';



import { Provider } from './context';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  }

  closeToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <Drawer show={this.state.sideDrawerOpen} close={this.closeToggleClickHandler} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/teams" component={Teams} />
                <Route path="/users" component={Users} />
                <Route path="/about" component={About} />
                <Route path="/page/userform/:id" component={Userform} />

                <Teams />

              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
