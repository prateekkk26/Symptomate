import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
	return ( 
		<footer className={styles.container}>
			<div className={styles.cover}>
				<h2>Contact us</h2>
				<div className={styles.icons}>
					<a href="https://www.facebook.com/prateek.rawat.549" target="_blank" alt="Facebook account">
						<ion-icon name="logo-facebook" className={styles.facebook}></ion-icon>
					</a>
					<a href="mailto: prateekrawat33@gmail.com" alt="Gmail account">
						<ion-icon name="logo-google" className={styles.google}></ion-icon>
					</a>
					<a href="https://www.instagram.com/prateekkk26/" target="_blank" alt="Instagram account link">
						<ion-icon name="logo-instagram" className={styles.instagram}></ion-icon>
					</a>
					<a href="https://github.com/prateekkk26/Symptomate" target="_blank" alt="Github project link">
						<ion-icon name="logo-github" className={styles.github}></ion-icon>
					</a>
				</div>
				<p>Copyright &copy; - 2020. All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer