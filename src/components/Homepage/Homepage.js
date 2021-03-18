import React, {useEffect} from 'react'

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'
// import { AuthContext } from '../Auth'
import ReactGA from 'react-ga'

const Homepage = () => {

	useEffect(() => {
	    ReactGA.initialize('UA-192431574-1');
	    ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Layout>
			<Header />
			<About />
			<Countries />

		</Layout>
	)
}

export default Homepage