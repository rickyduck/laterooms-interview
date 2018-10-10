import React, { Component } from 'react';
import Header from '../../molecules/Header';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Property Search" />
      </div>
    );
  }
}

export default App;
