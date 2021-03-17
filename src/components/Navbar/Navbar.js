import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

import logo from '../../img/logo.webp'
import fire from '../../config/firebase'
import { AuthContext } from '../Auth'

const Navbar = () => {
	const [active, setActive] = useState(false)
	const { currentUser } = useContext(AuthContext)

	return (
		<div>
			<nav className={styles.container}>
				<div className={styles.cover}>
					<Link to="/"><img src={logo} alt="Symptomate Logo" className={styles.logo} /></Link>
					<ul className={styles.navList}>
						<li className={styles.toggle} onClick={() => setActive(!active)}>
							<ion-icon name="menu"></ion-icon>
						</li>
						<li className={styles.navLink}><Link to="/">Home</Link></li>	
						<li className={styles.navLink}><Link to="/analyze">Analyze</Link></li>
						{
							currentUser ? <Link to="/login" className={`px-2 py-1 ${styles.btn} ${styles.btnGreen}`} onClick={() => fire.auth().signOut()}>Log out</Link>
								: <Link to="/login" className={`px-2 py-1 ${styles.btn} ${styles.btnGreen}`}>Log In</Link> 
						}
						<Link to="/signup" className={`px-2 py-1 ${styles.btn} ${styles.btnRed}`}>Sign Up</Link>
					</ul>
				</div>
			</nav>
			{
				active ? <div className={styles.block}>
					<ul className={styles.blockList}>
						<li className={`${styles.blockLink}`}><Link to="/">Home</Link></li>
						<li className={`${styles.blockLink}`}><Link to="/analyze">Analyze</Link></li>
						<li className={`${styles.blockLink}`}>
							{
								currentUser ? <a href="www.google.com" className={`${styles.blockBtn} ${styles.blockBtnGreen}`} onClick={() => fire.auth().signOut()}>
									Log Out
									</a>
									: <Link to="/login" className={`${styles.blockBtn} ${styles.blockBtnGreen}`}>Log in</Link>
							}
						</li>
						<li className={`${styles.blockLink}`}><Link to="/signup" className={`${styles.blockBtn} ${styles.blockBtnRed}`}>Sign Up</Link></li>
					</ul>
				</div> : null
			}
		</div>
	)
}

export default Navbar