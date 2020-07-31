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
    const { total, next } = this.state;
    const handleClick = buttonName => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      this.setState(calculate(this.state, buttonName));
    };
    return (
      <div className="calculator">
        <Display result={next || total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    );
  }
}
export default App;
