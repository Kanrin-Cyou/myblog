import React, { Component } from 'react';
import Navi from './components/Navi/Navi';
import Textbar from './components/Textbar/Textbar';
import Textcontent from './components/Textcontent/Textcontent';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">        
        <div className="grid">
          <div className="foxhole1"><Navi/></div>
          <div className="foxhole2"><Textbar/></div>
          <div className="foxhole3"><Textcontent/></div>
        </div>
      </div>
    );
  }
}

export default App;
