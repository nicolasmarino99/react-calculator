/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, size = 'small', color = 'gray',
}) => {
  const sizeClass = `${size}-btn`;
  const colorClass = `${color}`;
  // eslint-disable-next-line react/button-has-type
  return <button className={`Button ${sizeClass} ${colorClass}`}>{name}</button>;
};
Button.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
