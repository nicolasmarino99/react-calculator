/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    wide: false, 
    color: 'orange',

  }
  handleClick = () => {
    this.props.clickHandler(this.props.name);
    //console.log(this.props.name) 
  };

  render() {
    const {wide, name, color} = this.props
    let sizeClass
    
    wide ? sizeClass = 'big-btn' : sizeClass = 'small-btn';
    const colorClass = `${color}`;

    return (<button className={`Button ${sizeClass} ${colorClass}` } onClick={this.handleClick}>{name}</button>)
  }
}

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};
export default Button;
