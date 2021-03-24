import React, {useEffect} from 'react'
import Layout from '../Layout/Layout'
import ApexChart from '../ApexChart/ApexChart'
import ReactGA from 'react-ga'
import styles from './diseases.module.css'

const Diseases = () => {

	useEffect(() => {
	    ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Layout>
			<div className={styles.diseases}>
				<ApexChart
					type="bar"
					title="Top 10 countries affected by Corona Virus"
					xTitle="Number of reported cases" 
					yTitle="Countries"
					categories={['Russia','UK','India','France','Spain','USA','Turkey','Italy','Germany','Brazil']}
					data={[4464610,4307304,11726364,4398395,3228803,30584133,3035338,3400877,2681435,12051619]}
				/>
				<ApexChart
					type="line"
					title="Western African Ebola virus epidemic (2013-2016)"
					xTitle="Countries"
					yTitle="Number of reported cases"
					categories={['Liberia','Sierra Leone','Guinea','Nigeria','Mali','US','Italy','UK','Senegal','Spain']}
					data={[10675,14124,3811,20,8,4,1,1,1,1]}
				/>
				<ApexChart
					type="line" 
					title='Top 10 countries affected by Malaria'
					xTitle="Countries"
					yTitle="Number of reported cases in millions"
					categories={['Pakistan','Burkina Faso','Ethiopia','Uganda','Kenya','Ghana','Malawi','Niger','Zambiia','	Democratic Republic of Congo']}
					data={[4.3,6.1,3.9,10.3,5.8,8.8,3.7,3.5,4.7,6.3]}
				/>
			</div>
		</Layout>
	)
}

export default Diseases