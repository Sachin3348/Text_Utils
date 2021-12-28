import React, { Component } from 'react';

import './App.css'; 
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

class App extends Component {
  render() {
    return (
      <div>
     <Navbar title = 'Learning' aboutText = 'About Learning' />
     <Textarea />
     </div>
    );
  }
}

export default App;
