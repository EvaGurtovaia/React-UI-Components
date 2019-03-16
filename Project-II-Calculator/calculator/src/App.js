import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "wholeCalc">
    <div className ="display">
    <CalculatorDisplay label="0"buttonStyle = "myDisplay"/>
    </div>
    <div className = "numAction">
    <div className = "numbers">
    <NumberButton label="clear" buttonStyle = "myButtons very special "/>
    <NumberButton label="1" buttonStyle = "myButtons"/>
    <NumberButton label="2" buttonStyle = "myButtons "/>
    <NumberButton label="3" buttonStyle = "myButtons "/>
    <NumberButton label="4" buttonStyle = "myButtons "/>
    <NumberButton label="5" buttonStyle = "myButtons "/>
    <NumberButton label="6" buttonStyle = "myButtons "/>
    <NumberButton label="7" buttonStyle = "myButtons "/>
    <NumberButton label="8" buttonStyle = "myButtons "/>
    <NumberButton label="9" buttonStyle = "myButtons "/>
    <NumberButton label="0" buttonStyle = "myButtons special"/>
    </div>
    <div className = "action">
      
    <ActionButton label="+"/>
    <ActionButton label= "-"/>
    <ActionButton label= "*"/>
    <ActionButton label= "/"/>
    <ActionButton label= "="/>
    </div>
    </div>
    </div>
    
  );
};

export default App;
