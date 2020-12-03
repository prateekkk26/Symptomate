import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.cover}>
				<h3 className={styles.contact}>Contact us</h3>
				<div className={styles.icons}>
					<ion-icon name="logo-facebook" className={styles.facebook}></ion-icon>
					<ion-icon name="logo-google" className={styles.google}></ion-icon>
					<ion-icon name="logo-instagram" className={styles.instagram}></ion-icon>
					<ion-icon name="logo-github" className={styles.github}></ion-icon>
				</div>
				<p className={styles.copyright}>Copyright &copy; - 2020. All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer