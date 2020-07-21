import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    static statetProps = {
        result: '0',
    };
    render() {
        const { result } = this.props
        return (
           <div className='Display'>
               <p>Equals: {result}</p>
           </div>  
        )
    } 
}

Display.propTypes = {
    result: PropTypes.string,
}

export default Display;