import React from 'react';

import './Humbutton.css';

const Humbutton = props => (
    <button className="hum-button">
        <div className="hum-button__line" />
        <div className="hum-button__line" />
        <div className="hum-button__line" />
    </button>
);

export default Humbutton;