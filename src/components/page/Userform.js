import React, { Component } from 'react'
import Maps from './Map'

class Userform extends Component {
    state = {
        track: {},
        lyrics:{},
    }
  render(props) {
    console.log("props : " , props);
    return (
      <div>
        <h3>User Details</h3>
        <h3>Under Constructions :)</h3>
        <Maps />
      </div>
    )
  }
}

export default Userform;
