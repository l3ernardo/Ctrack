import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import Navbar from './components/Navbar';
import Team from './components/Team';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>

              <Route exact path='/team' component= {Team} />
 
            </Switch>
        </React.Fragment>

      </Router>
    );
  }
}

export default App;



// General stuff overview about what I´m inputing and why:

// I substitute single div tag required and using React.Fragment as best practice;
