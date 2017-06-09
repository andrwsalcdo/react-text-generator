import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      paras: 4, 
      html: true, 
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText(); 
  }

  getSampleText() {
    axios.get('http://hipsterjesus.com/api?paras='+this.state.paras + '&html=' + this.state.html)
      .then((res) => {
        this.setState({ text: res.data.text }, () => {
          console.log(this.state);
        }); 
      }).catch((err) => {
        console.log(err);
      })
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
