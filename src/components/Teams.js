import React, { Component } from 'react'
import Users from './Users'

import { Consumer } from '../context';

class Teams extends Component {

    constructor() {
        super();
        this.state = {
            userFilter: ''
          }
    }

    updateSearch(e) {
        this.setState({[e.target.name]: e.target.value.toLowerCase().substr(0,30)});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const {user_list} = value;

                    let filteredUsers = user_list.filter((item) => {
                        if(item.name.toLowerCase().indexOf(this.state.userFilter) !==-1 || item.username.toLowerCase().indexOf(this.state.userFilter) !==-1 || item.email.toLowerCase().indexOf(this.state.userFilter) !==-1 )
                            return true
                    }
                    );
                    
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
                                        onChange={this.updateSearch.bind(this)}
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