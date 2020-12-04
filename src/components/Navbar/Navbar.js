import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

import logo from '../../img/logo.png'

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}

	handleClick() {
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		return (
			<div>
				<nav className={styles.container}>
					<div className={styles.cover}>
						<Link to="/"><img src={logo} alt="Symptomate Logo" className={styles.logo} /></Link>
						<ul className={styles.navList}>
							<li className={styles.toggle} onClick={this.handleClick.bind(this)}><ion-icon name="menu"></ion-icon></li>
							<li className={styles.navLink}><Link to="/">Home</Link></li>
							
							<li className={styles.navLink}><Link to="/">Dashboard</Link></li>
							<Link to="/login" className={`${styles.btn} ${styles.btnGreen}`}>Log In</Link>
							<Link to="/signup" className={`${styles.btn} ${styles.btnRed}`}>Sign Up</Link>
						</ul>
					</div>
				</nav>
				{
					this.state.active ? <div className={styles.block}>
						<ul className={styles.blockList}>
							<li className={styles.blockLink}><Link to="/">Home</Link></li>
							<li className={styles.blockLink}><Link to="/">Dashboard</Link></li>
							<li className={styles.blockLink}><Link to="/login" className={`${styles.blockBtn} ${styles.blockBtnGreen}`}>Log In</Link></li>
							<li className={styles.blockLink}><Link to="/signup" className={`${styles.blockBtn} ${styles.blockBtnRed}`}>Sign Up</Link></li>
						</ul>
					</div> : null
				}
			</div>
		)
	}
}

export default Navbar