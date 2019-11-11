import React from 'react';
import "./Circles.css"

const Circles = props => {
    return(
        <div className="circle">
            <p> {props.number}</p>
        </div>
    )
};

export default Circles;