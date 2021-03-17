import React, {useEffect} from 'react'
import ReactGA from 'react-ga'

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'
// import { AuthContext } from '../Auth'

import { withRouter } from 'react-router-dom'

const Homepage = () => {
	// const { currentUser } = useContext(AuthContext)

	// const initializeReactGA = () => {
 //      ReactGA.initialize('UA-192431574-1');
 //    }

 //    initializeReactGA();

	return (
		<Layout>
			<Header />
			<About />
			<Countries />

		</Layout>
	)
}

export default withRouter(Homepage)