import React, { Component } from 'react';
import './App.css';
import Output from './components/output'; 
import Select from './components/Controls/select'; 
import Text from './components/Controls/text';
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

  showHtml= (x) => {
    this.setState({html: x}, this.getSampleText); 
  }

  changeParas = (number) => {
    this.setState({paras: number}, this.getSampleText); 
  }

  render() {
    return (
      <div className="App container">
          <h1>React Js Sample Text Generator</h1>
          <hr />
          <form className="form-inline">
            <div className="form-group">
              <label>Include HTML:</label>
              <Select value={this.state.html} onChange={this.showHtml} />
            </div>
            <div className="form-group">
              <label>Include Paragraphs:</label>
              <Text value={this.state.paras} onChange={this.changeParas} />
            </div>
          </form> 
          <br /><br />
          <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
