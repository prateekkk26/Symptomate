import React, {Component} from 'react'
import styles from './visualize.module.css'

import ApexChart from '../ApexChart/ApexChart'

class Visualize extends Component {
	render() {
		const diseases = this.props.diseases;
		const diseaseName = [];
		const diseaseProbability = [];
		{
			diseases.map(disease => diseaseName.push(disease.common_name))
			diseases.map(disease => diseaseProbability.push(parseFloat(disease.probability*100).toFixed(1)))
		}
		const state = {
		  labels: diseaseName,
		  datasets: [
		    {
		      label: 'Probability of disease',
		      borderColor: '#007bff',
		      hoverBackgroundColor: '#007bff',
		      borderWidth: 2,
		      data: diseaseProbability
		    }
		  ]
		}
		return (
			<div className={styles.container}>
				<div className={styles.chart}>
					<ApexChart 
						type="bar"
						title="List of Diagnosed diseases with their probabilities"
						horizontal
						categories={diseaseName}
						data={diseaseProbability}
					/>
					<div>
						<p className={`${styles.result}`}>
							You are diagnosed with <span>{diseaseName[0]}</span>
						</p>
						<a 
							href={`https://en.wikipedia.org/wiki/${diseaseName[0]}`} 
							target="_blank"
							className={styles.link}>
							Get to know more about this disease
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Visualize