import React from 'react'
import styles from './about.module.css'

import doctor1 from '../../img/doctor1.jpeg'
import doctor2 from '../../img/doctor2.webp'
import doctor3 from '../../img/doctor3.webp'
import doctor4 from '../../img/doctor4.webp'
import doctor5 from '../../img/doctor5.jpeg'
import doctor6 from '../../img/doctor6.jpeg'
import doctor7 from '../../img/doctor7.jpeg'
import doctor8 from '../../img/doctor8.webp'


const About = () => {
	return (
		<div className={styles.container} id="about">
			<h2>About us</h2>
			<p>
				Symptomate is a free app developed by our team to check symptoms and find out the cause behind each symptom.
				With the help of data extraction techniques, the app evaluates entered symptoms. It holds a information of many
				conditions and helps the user in getting an instant health closeup.
			</p>
			<div className={`d-lg-flex justify-content-center align-items-stretch ${styles.doctors}`}>
				<figure className={styles.doctorPhoto}>
						<img src={doctor1} alt="doctor-1" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor2} alt="doctor-2" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor3} alt="doctor-3" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor4} alt="doctor-4" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor5} alt="doctor-5" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor6} alt="doctor-6" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor7} alt="doctor-7" className={styles.item} />
				</figure>
				<figure className={styles.doctorPhoto}>
					<img src={doctor8} alt="doctor-8" className={styles.item} />
				</figure>
			</div>
		</div>
	)
}

export default About