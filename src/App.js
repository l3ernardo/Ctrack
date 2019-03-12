import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Drawer from './components/Navbar/Drawer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Teams from './components/Teams';
import Users from './components/page/Users';
import About from './components/About';
import Userform from './components/page/Userform';



import { Provider } from './context';

class App extends Component {
  
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  closeToggleClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <Drawer  show={this.state.sideDrawerOpen} close={this.closeToggleClickHandler}/>
          <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/teams" component={Teams} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/about" component={About} />
                <Route exact path="/page/userform/:id" component={Userform} /> 

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
