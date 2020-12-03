import React from 'react'

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'

const Homepage = () => {
	return (
		<Layout>
			<Header />
			<About />
			<Countries />
		</Layout>
	)
}

export default Homepage