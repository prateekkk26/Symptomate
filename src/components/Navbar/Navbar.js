import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

import logo from '../../img/logo.png'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.cover}>
				<Link to="/"><img src={logo} alt="Symptomate Logo" className={styles.logo} /></Link>
				<ul className={styles.navList}>
					<li className={styles.navLink}><Link to="/">Home</Link></li>
					<li className={styles.navLink}><a href="#about">About</a></li>
					<li className={styles.navLink}><Link to="/">Dashboard</Link></li>
					<Link to="/login" className={`${styles.btn} ${styles.btnGreen}`}>Log In</Link>
					<Link to="/signup" className={`${styles.btn} ${styles.btnRed}`}>Sign Up</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar