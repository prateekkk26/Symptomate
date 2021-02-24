import React from 'react'
import axios from 'axios'
import styles from './conditions.module.css'

const Conditions = (props) => {

	return (
		<div className={`${styles.evidence}`}>
			{
				props.conditions.map((e) => {
					return(
						<div className={styles.flexItem}>
							<div key={e.id} className={styles.symptom}>
								<div className={`bg-primary py-2 px-4 ${styles.title}`}>
									<h3 className="text-light">{e.name}</h3>
								</div>
								<div className={`py-3 px-4 ${styles.info}`}>
									<p><span>Common Name:</span>&nbsp; &nbsp;{e.common_name}</p>
									<p><span>Seriousness:</span>&nbsp; &nbsp;{e.seriousness}</p>
									<p><span>Sex Filter:</span>&nbsp; &nbsp;{e.sex_filter}</p>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Conditions