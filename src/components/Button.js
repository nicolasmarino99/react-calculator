import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/button-has-type
const Button = ({ name }) => <button className="Button">{name}</button>;
Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};
export default Button;
