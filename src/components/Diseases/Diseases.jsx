import React, {useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import ApexChart from '../ApexChart/ApexChart'
import ReactGA from 'react-ga'
import styles from './diseases.module.css'
import Loading from '../Loading/Loading'
import {db} from '../../config/firebase'

const Diseases = () => {

	const [corona, setCoronaData] = useState([]);
	const [ebola, setEbolaData] = useState([]);
	const [malaria, setMalariaData] = useState([]);

	useEffect(() => {
	    ReactGA.pageview(window.location.pathname + window.location.search);
	    fetchAll()
	}, []);

	const fetchAll = () => {
		fetchCoronaData()
	    fetchMalariaData()
	    fetchEbolaData()
	}

	const fetchCoronaData=()=>{
	    db.collection('corona').get().then((snapshot) => {

	      snapshot.docs.forEach(doc => {
	          let items = doc.data();
	          /* Make data suitable for rendering */
	          // items = JSON.stringify(items);
	          /* Update the components state with query result */
	          setCoronaData(items) 
	      });
	    });
	}

	const fetchEbolaData=()=>{
	    db.collection('ebola').get().then((snapshot) => {

	      snapshot.docs.forEach(doc => {
	          let items = doc.data();
	          /* Make data suitable for rendering */
	          // items = JSON.stringify(items);
	          /* Update the components state with query result */
	          setEbolaData(items) 
	      });
	    });
	}

	const fetchMalariaData=()=>{
	    db.collection('malaria').get().then((snapshot) => {

	      snapshot.docs.forEach(doc => {
	          let items = doc.data();
	          /* Make data suitable for rendering */
	          // items = JSON.stringify(items);
	          /* Update the components state with query result */
	          setMalariaData(items) 
	      });
	    });
	}

	return (
		<Layout>
			<div className={styles.diseases}>
				{malaria.length!==0 ? <ApexChart
					type="bar" 
					title='Top 10 countries affected by Malaria'
					xTitle="Countries"
					horizontal
					yTitle="Number of reported cases in millions"
					data={malaria}
				/> : <Loading />}

				{corona.length!==0 ? <ApexChart
					type="bar"
					title="Top 10 countries affected by Corona Virus"
					xTitle="Number of reported cases" 
					yTitle="Countries"
					data={corona}
				/> : <Loading />}

				{ebola.length!==0 ? <ApexChart
					type="bar"
					title="Western African Ebola virus epidemic (2013-2016)"
					xTitle="Countries"
					yTitle="Number of reported cases"
					horizontal
					data={ebola}
				/> : <Loading />}
				
			</div>
		</Layout>
	)
}

export default Diseases