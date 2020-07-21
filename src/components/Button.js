import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => {
    return <button className='Button'>{name}</button>
}
Button.propTypes = {
    name: PropTypes.string,
  };
export default Button;