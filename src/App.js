import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      params: 4, 
      html: true, 
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
          hello
      </div>
    );
  }
}

export default App;
