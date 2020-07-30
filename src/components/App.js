import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null, 
      next: null, 
      operation: null,
    };
  }

  render() {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    const { total, next } = this.state
    handleClick = (buttonName) => {
      this.setState(calculate(this.state, buttonName));
    }; 
    return (
      <div className="calculator">
        <Display { next ? next : total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
