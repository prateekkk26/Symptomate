import {useState, useEffect} from 'react'
import styles from './countries.module.css'

import ApexChart from '../ApexChart/ApexChart'
import {db} from '../../config/firebase'
import {data} from './data'

const Countries = () => {
	const [healthData, setHealthData] = useState([])

	useEffect(() => {
		fetchHealthData()
		console.log(healthData)
	}, [])


	const fetchHealthData = async()=>{
	    const response = db.collection('health_index');
	    const data = await response.get();
	    data.docs.forEach(item=>{
	     	setHealthData([...healthData,item.data()])
	    })
	    console.log(healthData)
	}

	return (
		<div className={styles.container}>
			<div className={styles.chart}>
				<ApexChart 
					type="line"
					title="Health care index of countries"
					xTitle="Countries"
					yTitle="Healthcare Index"
					data={healthData}
				/>
			</div>
		</div>
	)
}

export default Countries