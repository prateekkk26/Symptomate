import React, {useEffect} from 'react'
import ReactGA from 'react-ga'

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'
// import { AuthContext } from '../Auth'

const Homepage = () => {
	// const { currentUser } = useContext(AuthContext)

	useEffect(() => {
		return () => {
			initializeReactGA();
		};
	}, [])

	const initializeReactGA = () => {
      ReactGA.initialize('UA-192431574-1');
      ReactGA.pageview('/homepage');
    }

	return (
		<Layout>
			<Header />
			<About />
			<Countries />

		</Layout>
	)
}

export default Homepage