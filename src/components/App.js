import React from 'react';
import '../App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return (
      <div className='calculator'>
         
          <Display />
          <ButtonPanel />
       
      </div>
    )
  }
}
export default App;
