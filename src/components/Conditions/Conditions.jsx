import React from 'react'
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
									<p className="display-6"><span>Common Name:</span>&nbsp; &nbsp;{e.common_name}</p>
									<p className="display-6"><span>Seriousness:</span>&nbsp; &nbsp;{e.seriousness}</p>
									<p className="display-6"><span>Sex Filter:</span>&nbsp; &nbsp;{e.sex_filter}</p>
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