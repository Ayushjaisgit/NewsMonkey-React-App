import './App.css';

import React, { Component } from 'react'
import NavBar from './my components/NavBar';
import News from './my components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

