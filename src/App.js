import React, {Component} from 'react'
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import error from './components/404/error'

class App extends Component {
  render() {
    return (
      	<BrowserRouter>
  			<Switch>
    			<Route exact path="/" component={Homepage} />
    			<Route exact path="/login" component={Login} />
    			<Route exact path="/signup" component={Signup} />
          <Route path="/404" component={error} />
          <Redirect to="/404" />
    		</Switch>
    	</BrowserRouter>
    )
  }
}

export default App;
