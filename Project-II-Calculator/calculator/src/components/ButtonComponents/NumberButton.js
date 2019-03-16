import React from 'react';
import './Button.css';


const numberButton = (props) => (
<div className={props.buttonStyle}>
    {props.label}
</div>
)

export default numberButton;