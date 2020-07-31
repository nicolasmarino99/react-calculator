/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-named-as-default-member
import Button from './Button';
// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const handleClick = buttonName => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.clickHandler(buttonName);
    };
    return (
      <div className="ButtonPanel">
        <div className="row-container">
          <Button clickHandler={handleClick} name="AC" color="grey" />
          <Button clickHandler={handleClick} name="+/-" color="grey" />
          <Button clickHandler={handleClick} name="%" color="grey" />
          <Button clickHandler={handleClick} name="÷" />
        </div>
        <div className="row-container">
          <Button clickHandler={handleClick} name="7" color="grey" />
          <Button clickHandler={handleClick} name="8" color="grey" />
          <Button clickHandler={handleClick} name="9" color="grey" />
          <Button clickHandler={handleClick} name="X" />
        </div>
        <div className="row-container">
          <Button clickHandler={handleClick} name="4" color="grey" />
          <Button clickHandler={handleClick} name="5" color="grey" />
          <Button clickHandler={handleClick} name="6" color="grey" />
          <Button clickHandler={handleClick} name="-" />
        </div>
        <div className="row-container">
          <Button clickHandler={handleClick} name="1" color="grey" />
          <Button clickHandler={handleClick} name="2" color="grey" />
          <Button clickHandler={handleClick} name="3" color="grey" />
          <Button clickHandler={handleClick} name="+" />
        </div>
        <div className="row-container">
          <Button clickHandler={handleClick} name="0" wide color="grey" />
          <Button clickHandler={handleClick} name="." color="grey" />
          <Button clickHandler={handleClick} name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
