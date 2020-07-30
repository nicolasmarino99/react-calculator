import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    // eslint-disable-next-line react/jsx-one-expression-per-line

    return (
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
