import React from 'react'
import styles from './error.module.css'
import {Link} from 'react-router-dom'

import Layout from '../Layout/Layout'

const Error = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.error}>
					<div className={`${styles.title}`}>404</div>
					<div className={`text-center ${styles.subLine}`}>It looks like you're lost</div>
					<Link to="/" className={styles.btn}>GO TO HOMEPAGE</Link>
				</div>
			</div>
		</Layout>
	)
}

export default Error