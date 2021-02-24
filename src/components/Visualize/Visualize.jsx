import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';
import styles from './visualize.module.css'

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
				<div className="h2">List of Diagnosed diseases</div>
				<div className={styles.chart}>
					<Bar
			          data={state}
			          options={{
			            title:{
			              display:false,
			              text:'List of diagnosed diseases',
			              fontSize:15
			            },
			            responsive: true,
			            legend:{
			              display:true,
			              position:'top',
			              fontSize: 8
			            },
			            label: {
			            	fontColor: '#000',
			            },
			            scales: {
			            	yAxes: [{ticks: {fontSize: 8, fontColor: '#007bff'}}],
			            	xAxes: [{ticks: {fontSize: 10, fontColor: '#007bff'}}],
			            }
			          }}
			        />
				</div>
			</div>
		)
	}
}

export default Visualize