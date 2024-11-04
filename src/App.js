import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components//News.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize = 5;
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      
        <div>
          <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />


          <Routes>
            <Route exact path="/" element={<News key="general" apikey={this.apikey} setProgress={this.setProgress} pagesize={this.pagesize} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pagesize} country="us" category="technology" />} />
          </Routes>
           </Router>
        </div>
     
    )
  }
}

