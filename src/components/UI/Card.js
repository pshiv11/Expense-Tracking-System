import React from 'react';
import './Card.css';

function Card(props){

    const classes = 'card ' + props.className; // default "card" class shown below + the attribute (className) passed when "Card" component is used (from outside)
    return(
        <div className = {classes}>{props.children}</div>


    )
}


export default Card;