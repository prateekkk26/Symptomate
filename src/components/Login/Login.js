import React from 'react'
import {Link} from 'react-router-dom'
import styles from './login.module.css'

import Layout from '../Layout/Layout'

const Login = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.left}>
					<img src="https://cdn.pixabay.com/photo/2017/01/31/22/32/boy-2027768__340.png" />
					<Link to="/login" className={`${styles.btn} ${styles.btnLogIn}`}>Log In</Link>
					<br/>
					<Link to="/signup" className={`${styles.btn} ${styles.btnSignUp}`}>Sign Up</Link>
				</div>
				<div className={styles.right}>
					<h3>Welcome to Symptomate</h3>
					<div className={styles.formCover}>
						<div className={styles.icons}>
							<ion-icon name="person-outline" className={styles.outline}></ion-icon>
							<ion-icon name="key-outline" className={styles.outline}></ion-icon>
						</div>
						<form action="www.google.com">
							<input type="text" name="name" id="name" placeholder="Full Name" />
							<input type="password" name="password" id="password" placeholder="Password" />
						</form>
					</div>
					<Link to="/" className={styles.submit}>Log In</Link>
				</div>
			</div>
		</Layout>
	)
}

export default Login