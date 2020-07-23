import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="ButtonPanel">
        <div className="row-container">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" color="orange" />
        </div>
        <div className="row-container">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" color="orange" />
        </div>
        <div className="row-container">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" color="orange" />
        </div>
        <div className="row-container">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" color="orange" />
        </div>
        <div className="row-container">
          <Button name="0" size="big" />
          <Button name="." />
          <Button name="=" color="orange" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
