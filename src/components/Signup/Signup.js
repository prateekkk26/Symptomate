import React from 'react'
import {Link} from 'react-router-dom'
import styles from './signup.module.css'

import Layout from '../Layout/Layout'
import signupLogo from '../../img/signup-logo.webp'

const Login = () => {
	return (
		<Layout>
			<div className={styles.pad}>
				<div className={styles.container}>
					<div className={styles.left}>
						<img src={signupLogo} alt="Signup logo"/>
						<Link to="/login" className={`${styles.btn} ${styles.btnLogIn}`}>Log In</Link>
						<br/>
						<Link to="/signup" className={`${styles.btn} ${styles.btnSignUp}`}>Sign Up</Link>
					</div>
					<div className={styles.right}>
						<h2>Create account for free</h2>
						<div className={styles.formCover}>
							<div className={styles.icons}>
								<ion-icon name="person-outline" className={styles.outline}></ion-icon>
								<ion-icon name="mail-outline" className={styles.outline}></ion-icon>
								<ion-icon name="key-outline" className={styles.outline}></ion-icon>
							</div>
							<form action="www.google.com">
								<input type="text" name="name" id="name" placeholder="Your Name" />
								<input type="email" name="email" id="email" placeholder="Your Email" />
								<input type="password" name="password" id="password" placeholder="Your Password" />
							</form>
						</div>
						<Link to="/" className={styles.submit}>Sign up</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Login