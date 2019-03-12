import React, { Component } from 'react'
import Users from './page/Users'

import { Consumer } from '../context';

class Teams extends Component {

    constructor() {
        super();
        this.state = {
            userFilter: ''
          } 
    }

    updateSearch = (e) => {
        this.setState({[e.target.name]: e.target.value.toLowerCase()});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const {user_list} = value;

                    let filteredUsers = user_list.filter((item) => {
                        
                        if(item.name.toLowerCase().includes(this.state.userFilter) || item.username.toLowerCase().includes(this.state.userFilter) || item.email.toLowerCase().includes(this.state.userFilter))
                            return true
                    });
                    
                    if(user_list === undefined || user_list.length === 0 ){

                        return "Loading...";

                    } else {
                        console.log("user_list : ", user_list);
                            return (
                                <React.Fragment>
                                    <div className="card">

                                    <input 
                                        type="text" 
                                        name="userFilter" 
                                        placeholder="Search.."
                                        value={this.state.userFilter}
                                       onChange={this.updateSearch}
                                    />

                                        {filteredUsers.map(item => (
                                            <Users key={item.id} content={item}/>
                                        ))}
                                    </div>
                                </React.Fragment>
                            )
                    }
    
                }}
            </Consumer>
        )
      }
    }

export default Teams;