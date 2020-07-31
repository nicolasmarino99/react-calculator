/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="Display">
    <p>
      {result}
    </p>
  </div>
);
Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  result: PropTypes.string,
};

export default Display;
