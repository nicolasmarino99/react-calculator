/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide = false, color = 'orange',
}) => {
  let sizeClass;
  // eslint-disable-next-line no-unused-expressions
  wide ? sizeClass = 'big-btn' : sizeClass = 'small-btn';
  const colorClass = `${color}`;
  // eslint-disable-next-line react/button-has-type
  return <button className={`Button ${sizeClass} ${colorClass}`}>{name}</button>;
};
Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};
export default Button;
