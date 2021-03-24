import React from 'react'

import styles from './spinner.module.css'

const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<div className={styles.loading}>
			  <div className={styles.circle}></div>
			  <div className={styles.circle}></div>
			  <div className={styles.circle}></div>
			  <div className={styles.circle}></div>
			</div>
		</div>
	)
}

export default Spinner