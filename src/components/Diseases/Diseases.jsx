import React, {useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import ApexChart from '../ApexChart/ApexChart'
import ReactGA from 'react-ga'
import styles from './diseases.module.css'

import {db} from '../../config/firebase'

const Diseases = () => {

	const [corona, setCoronaData] = useState([]);
	const [ebola, setEbolaData] = useState([]);
	const [malaria, setMalariaData] = useState([]);

	useEffect(() => {
	    ReactGA.pageview(window.location.pathname + window.location.search);
	    fetchCoronaData()
	    fetchEbolaData()
	    fetchMalariaData()

	}, []);

	const fetchCoronaData=async()=>{
	    const response=db.collection('corona');
	    const data=await response.get();
	    data.docs.forEach(item=>{
	     	setCoronaData([...corona,item.data()])
	    })
	}

	const fetchEbolaData=async()=>{
	    const response=db.collection('ebola');
	    const data=await response.get();
	    data.docs.forEach(item=>{
	     	setEbolaData([...ebola,item.data()])
	    })
	}

	const fetchMalariaData=async()=>{
	    const response=db.collection('malaria');
	    const data=await response.get();
	    data.docs.forEach(item=>{
	     	setMalariaData([...malaria,item.data()])
	    })
	}

	return (
		<Layout>
			<div className={styles.diseases}>
				<ApexChart
					type="bar"
					title="Top 10 countries affected by Corona Virus"
					xTitle="Number of reported cases" 
					yTitle="Countries"
					data={corona}
				/>
				<ApexChart
					type="line"
					title="Western African Ebola virus epidemic (2013-2016)"
					xTitle="Countries"
					yTitle="Number of reported cases"
					data={ebola}
				/>
				<ApexChart
					type="line" 
					title='Top 10 countries affected by Malaria'
					xTitle="Countries"
					yTitle="Number of reported cases in millions"
					data={malaria}
				/>
			</div>
		</Layout>
	)
}

export default Diseases