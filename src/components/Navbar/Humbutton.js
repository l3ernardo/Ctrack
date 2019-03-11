import React from 'react';

import './Humbutton.css';

const Humbutton = props => (
    <button className="hum-button" onClick={props.click}>
        <i className="fa fa-bars"></i>
    </button>

);

export default Humbutton;
