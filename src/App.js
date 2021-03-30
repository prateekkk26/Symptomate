import React from 'react'
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Diseases from './components/Diseases/Diseases'
import error from './components/404/error'
import { AuthProvider } from './components/Auth'
import GA from './components/GA/GA'
import ReactGA from 'react-ga'

const App = () => {

  ReactGA.initialize('UA-192431574-1');

  return (
      <AuthProvider>
      	<BrowserRouter>
  			<Switch>
    			<Route exact path="/" component={Homepage} />
    			<Route exact path="/login" component={Login} />
    			<Route exact path="/signup" component={Signup} />
          <Route exact path="/analyze" component={Dashboard} />
          <Route exact path="/diseases" component={Diseases} />
          <Route exact path="/site-activity" component={GA} />
          <Route component={error} />
          <Redirect to="/" />
    		</Switch>
    	</BrowserRouter>
    </AuthProvider>
  )
}

export default App;
