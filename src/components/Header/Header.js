import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<h1 className={`font-weight-bold ${styles.title}`}>Symptomate</h1>
				<h3 className={`font-weight-bold ${styles.subtitle}`}>Make your life healthier</h3>
				<Link to="/analyze" className={`px-4 py-3 ${styles.btn} ${styles.btnFull} font-weight-bold`}>Analyze</Link>
				<Link to="/site-activity" className={`px-4 py-3 ${styles.btn} ${styles.btnGhost} font-weight-bold`}>Site Activity</Link>
			</div>
		</div>
	)
}

export default Header