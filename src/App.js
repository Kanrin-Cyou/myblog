import React, { Component } from 'react';
import Navi from './components/Navi/Navi';
import Textbar from './components/Textbar/Textbar';
import Textcontent from './components/Textcontent/Textcontent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    let route = window.location.pathname;
    return (
      <div className="App">
        <div className="foxhole1"><Navi/></div>
        <div className="foxhole2"><Textbar/></div>
        <div className="foxhole3"><Textcontent route={route} day={this.state.date}/></div>
      </div>
    );
  }
}

export default App;
