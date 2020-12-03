import React from 'react'
import styles from './about.module.css'

const About = () => {
	return (
		<div className={styles.container} id="about">
			<h2>About us</h2>
			<p>
				Symptomate is a free app developed by our team to check symptoms and find out the cause behind each symptom.
				With the help of data extraction techniques, the app evaluates entered symptoms. It holds a information of many
				conditions and helps the user in getting an instant health closeup.
			</p>
			<div className={styles.doctors}>
				<ul className={styles.doctorShowcase}>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="doctor-1" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149__340.jpg" alt="doctor-2" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://cdn.pixabay.com/photo/2017/03/14/03/20/nurse-2141808__340.jpg" alt="doctor-3" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://cdn.pixabay.com/photo/2019/12/06/13/40/anesthesia-4677401__340.jpg" alt="doctor-4" className={styles.item} />
						</figure>
					</li>
				</ul>
				<ul className={styles.doctorShowcase}>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="doctor-5" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://images.pexels.com/photos/3881247/pexels-photo-3881247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="doctor-6" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="doctor-7" className={styles.item} />
						</figure>
					</li>
					<li>
						<figure className={styles.doctorPhoto}>
							<img src="https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722__340.jpg" alt="doctor-8" className={styles.item} />
						</figure>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default About