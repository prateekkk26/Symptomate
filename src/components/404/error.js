import React from 'react'
import styles from './error.module.css'

import Layout from '../Layout/Layout'

const error = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.cover}>
					<h1>404</h1>
					<h3>Page not found</h3>
				</div>
			</div>
		</Layout>
	)
}

export default error