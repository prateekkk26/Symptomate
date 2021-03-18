import React, {useEffect} from 'react'

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'
// import { AuthContext } from '../Auth'
import ReactGA from 'react-ga'

const Homepage = () => {

	useEffect(() => {
	    ReactGA.pageview('/home');
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