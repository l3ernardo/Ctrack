import React, { Component } from 'react'
import Maps from './CarMap'

import axios from 'axios';

class Userform extends Component {
  state = {
    user: null
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => {
      this.setState({
        user:res.data
      })
      console.log("res.data : ", res.data);
    })
  }

  render() {
    const user = this.state.user ? (
      <div className="post">
        <i className="fa fa-user"></i> {this.state.user.name} <br/>
        <i className="fa fa-envelope"></i> {this.state.user.email} <br/>
        <i className="fa fa-phone"></i> {this.state.user.phone} <br/>
        <i className="fa fa-map-marker"></i> {this.state.user.address.city} <br/>
        <i className="fa fa-building"></i> {this.state.user.company.name} <br/>
        <i className="fa fa-globe"></i> {this.state.user.address.geo.lat} - {this.state.user.address.geo.lng}

        <Maps content={this.state.user.address.geo}/>

      </div>
    ) : (
      <div className="center">Loading...</div>
    )

    return (
      <div>
        <h3>User Details</h3>
        {user}
      </div>
    )
  }
}

export default Userform;

/*

      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res=> {
        //console.log(res.data)
        this.setState({users:res.data});
      })
      .catch(err => console.log(err));


*/