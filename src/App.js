import React, {useEffect} from 'react'
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import error from './components/404/error'
import { AuthProvider } from './components/Auth'
import ReactGA from 'react-ga'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-192431574-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
      <AuthProvider>
      	<BrowserRouter>
  			<Switch>
    			<Route exact path="/" component={Homepage} />
    			<Route exact path="/login" component={Login} />
    			<Route exact path="/signup" component={Signup} />
          <Route exact path="/analyze" component={Dashboard} />
          <Route path="/404" component={error} />
        <Redirect to="/404" />
    		</Switch>
    	</BrowserRouter>
    </AuthProvider>
  )
}

export default App;
