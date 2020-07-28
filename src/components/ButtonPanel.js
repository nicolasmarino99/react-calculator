import React from 'react';
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="ButtonPanel">
        <div className="row-container">
          <Button name="AC" color="grey" />
          <Button name="+/-" color="grey" />
          <Button name="%" color="grey" />
          <Button name="÷" />
        </div>
        <div className="row-container">
          <Button name="7" color="grey" />
          <Button name="8" color="grey" />
          <Button name="9" color="grey" />
          <Button name="X" />
        </div>
        <div className="row-container">
          <Button name="4" color="grey" />
          <Button name="5" color="grey" />
          <Button name="6" color="grey" />
          <Button name="-" />
        </div>
        <div className="row-container">
          <Button name="1" color="grey" />
          <Button name="2" color="grey" />
          <Button name="3" color="grey" />
          <Button name="+" />
        </div>
        <div className="row-container">
          <Button name="0" wide color="grey" />
          <Button name="." color="grey" />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
