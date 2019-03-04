import React from 'react'
import { Link } from 'react-router-dom'

const Users = (props) => {

    //console.log("props : " , props);
  return (
    <div className="card">
        <h2>{props.content.name}</h2>
        <h4 className="title">{props.content.username}</h4>
        <p><b>Address :</b> {props.content.address.street} - {props.content.address.suite} - {props.content.address.zipcode} - {props.content.address.city}</p>
        <p><b>Phone :</b> {props.content.phone}</p>
        <p><b>Website :</b> {props.content.website}</p>
        <Link to={`page/userform/${props.content.id}`}><button>Contact</button></Link>
    </div>
  );
}

export default Users;