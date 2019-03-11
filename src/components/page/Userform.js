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
        <h4>{this.state.user.name}</h4>
        <h4>{this.state.user.username}</h4>
        <h4>{this.state.user.phone}</h4>
        <h4>{this.state.user.website}</h4>
        <h4>{this.state.user.address.street}</h4>
        <h4>{this.state.user.address.suite}</h4>
        <h4>{this.state.user.address.geo.lat}</h4>

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