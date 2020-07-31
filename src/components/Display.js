/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: props,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="Display">
        <p>
          {result}
        </p>
      </div>
    );
  }
}

Display.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  result: PropTypes.string,
};

export default Display;
