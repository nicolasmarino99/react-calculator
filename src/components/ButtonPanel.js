import React from 'react';
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {

  handleClick = buttonName => {
    this.props.clickHandler(buttonName); 
  };
  render() {
    return (
      <div className="ButtonPanel">
        <div className="row-container">
          <Button clickHandler={this.handleClick} name="AC" color="grey" />
          <Button clickHandler={this.handleClick} name="+/-" color="grey" />
          <Button clickHandler={this.handleClick} name="%" color="grey" />
          <Button clickHandler={this.handleClick} name="÷" />
        </div>
        <div className="row-container">
          <Button clickHandler={this.handleClick} name="7" color="grey" />
          <Button clickHandler={this.handleClick} name="8" color="grey" />
          <Button clickHandler={this.handleClick} name="9" color="grey" />
          <Button clickHandler={this.handleClick} name="X" />
        </div>
        <div className="row-container">
          <Button clickHandler={this.handleClick} name="4" color="grey" />
          <Button clickHandler={this.handleClick} name="5" color="grey" />
          <Button clickHandler={this.handleClick} name="6" color="grey" />
          <Button clickHandler={this.handleClick} name="-" />
        </div>
        <div className="row-container">
          <Button clickHandler={this.handleClick} name="1" color="grey" />
          <Button clickHandler={this.handleClick} name="2" color="grey" />
          <Button clickHandler={this.handleClick} name="3" color="grey" />
          <Button clickHandler={this.handleClick} name="+" />
        </div>
        <div className="row-container">
          <Button clickHandler={this.handleClick} name="0" wide color="grey" />
          <Button clickHandler={this.handleClick} name="." color="grey" />
          <Button clickHandler={this.handleClick} name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
