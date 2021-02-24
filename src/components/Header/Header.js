import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<h1 className={styles.title}>Symptomate</h1>
				<h3 className={styles.subtitle}>Make your life healthier</h3>
				<Link to="/analyze" className={`px-4 py-3 ${styles.btn} ${styles.btnFull}`}>Analyze</Link>
				<a href="www.google.com" className={`px-4 py-3 ${styles.btn} ${styles.btnGhost}`}>Site Activity</a>
			</div>
		</div>
	)
}

export default Header