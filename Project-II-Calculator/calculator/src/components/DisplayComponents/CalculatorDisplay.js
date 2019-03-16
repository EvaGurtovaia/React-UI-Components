import React from 'react';
import './Display.css';



const calculatorDisplay = (props) => (
<div className={props.buttonStyle}>
    {props.label}
</div>
)

export default calculatorDisplay;