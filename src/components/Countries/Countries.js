import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';
import styles from './countries.module.css'

import {data} from './data'

class Countries extends Component {
	render() {
		const countries = data;
		const countryName = [];
		const healthIndex = [];
		{
			countries.map(country => countryName.push(country.country))
			countries.map(country => healthIndex.push(country.healthIndex))
			console.log(countryName, healthIndex);
		}
		const state = {
		  labels: countryName,
		  datasets: [
		    {
		      label: 'Health Care Index',
		      borderColor: 'rgba(0,0,137,1)',
		      hoverBackgroundColor: 'rgba(0,0,137,0.8)',
		      borderWidth: 2,
		      data: healthIndex
		    }
		  ]
		}
		return (
			<div className={styles.container}>
				<h2>Health care index of countries</h2>
				<div className={styles.chart}>
					<Bar
			          data={state}
			          options={{
			            title:{
			              display:false,
			              text:'Health care index of countries',
			              fontSize:15
			            },
			            responsive: true,
			            legend:{
			              display:true,
			              position:'top',
			              fontSize: 8
			            },
			            label: {
			            	fontColor: 'rgba(255,255,255,1)',
			            },
			            scales: {
			            	yAxes: [{ticks: {fontSize: 10, fontColor: 'rgba(0,0,137,1'}}],
			            	xAxes: [{ticks: {fontSize: 10, fontColor: 'rgba(0,0,137,1'}}],
			            }
			          }}
			        />
				</div>
			</div>
		)
	}
}

export default Countries