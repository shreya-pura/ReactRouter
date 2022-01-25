import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
  } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <Router>
      <div className='header'>
     
      <Header/>
      <Route exact path="/home" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup} />
      </div>
      <div className='footer'><Footer /></div>
      </Router>
      
  
    )
  }
}


export default App;