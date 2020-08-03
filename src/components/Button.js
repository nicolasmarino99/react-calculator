/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    props.clickHandler(props.name);
  };
  const { wide, name, color } = props;

  const sizeClass = wide ? 'big-btn' : 'small-btn';
  const colorClass = color || 'orange';

  // eslint-disable-next-line react/button-has-type
  return (<button className={`Button ${sizeClass} ${colorClass}`} onClick={handleClick}>{name}</button>);
};

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  wide: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.string,
};
export default Button;
