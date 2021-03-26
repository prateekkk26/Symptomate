import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';
import styles from './countries.module.css'

import ApexChart from '../ApexChart/ApexChart'

import {data} from './data'

class Countries extends Component {
	render() {
		const countries = data;
		const countryName = [];
		const healthIndex = [];
		{
			countries.map(country => countryName.push(country.country))
			countries.map(country => healthIndex.push(country.healthIndex))
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
				<div className={styles.chart}>
					<ApexChart 
						type="line"
						title="Health care index of countries"
						xTitle="Countries"
						yTitle="Healthcare Index"
						categories={countryName}
						data={healthIndex}
					/>
				</div>
			</div>
		)
	}
}

export default Countries