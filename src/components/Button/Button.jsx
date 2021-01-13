/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Button.css';



export default (props) => {
    let classes = 'button ';
    classes += props.double ? 'double' : '';
    classes += props.operation ? 'operation':'';
    classes += props.triple ? 'triple' : '';
   return (
    <button className={classes}
    onClick={e => props.click && props.click(props.label)}
    >
        {props.label}
    </button>
   )
}
