import './App.css';
import Info from './components/info'
import Content from './components/content'
import React, { Component } from 'react';


class App extends Component{

  componentDidMount() {

    document.body.classList.add("body");
  }
  componentWillUnmount() {
    document.body.classList.remove("body");
  }
  render() {
    return (
    <div className="App">
      <Info/>
      <Content/>
      <footer className="footer">HAND CRAFTED BY NICOLA WONG 2021
      </footer>
    </div>
  );}
}

export default App;
