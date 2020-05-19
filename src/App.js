import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import BigDisplay from './components/BigDisplay';
import Content from './components/Content';
import TextField from './components/TextField';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiReturn: "Teste"};

  }

  // componentWillMount() {
  //   fetch("http://localhost:9000/api")
  //   .then(res => res.text())
  //   .then(res => this.setState({apiReturn: res}))
  // }

render(){
  return (
    <div className="App">
      <Nav />
      <BigDisplay
        title="Can you please enter your tax identification number?"
        subTitle="We need your company tax identification number to verify your business details."
      />
      
      <Content>
        <TextField label="Tax Identification Number" />
        <TextField label="Tax Identification Number" />
        <TextField label="Tax Identification Number" />

        <Button className="white">Back</Button>
        <Button >Next</Button>
      </Content>
      <Footer />
    </div>
  )
}
}

export default App;
