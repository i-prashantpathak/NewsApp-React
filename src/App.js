
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar/>
        <News newsApi="https://newsapi.org/v2/top-headlines?country=in&apiKey=e56c12946e1548deb202af0f4f2b4e38" pageSize={6} />
      </div>
    )
  }
}
