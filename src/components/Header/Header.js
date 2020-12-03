import React from 'react'
import styles from './header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<h1 className={styles.title}>Symptomate</h1>
				<h3 className={styles.subtitle}>Make your life healthier</h3>
				<a href="www.google.com" className={`${styles.btn} ${styles.btnFull}`}>Analyze</a>
				<a href="www.google.com" className={`${styles.btn} ${styles.btnGhost}`}>Site Activity</a>
			</div>
		</div>
	)
}

export default Header