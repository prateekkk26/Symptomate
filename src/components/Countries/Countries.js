import React, {Component} from 'react'
import styles from './countries.module.css'

import ApexChart from '../ApexChart/ApexChart'
import {db} from '../../config/firebase'
import {data} from './data'

class Countries extends Component {

	componentDidMount() {
		this.fetchData()	
	}

	fetchData() {
	    db.collection('health_index').get().then((snapshot) => {

	      snapshot.docs.forEach(doc => {
	          let items = doc.data();
	          /* Make data suitable for rendering */
	          // items = JSON.stringify(items);
	          /* Update the components state with query result */
	          this.setState({ healthData : items }) 
	      });
	    });
	}

	constructor(props) {
		super(props)
		this.state = {
			healthData: []
		}
		this.fetchData = this.fetchData.bind(this)
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.chart}>
					{this.state.healthData.length!=0 ? <ApexChart 
						type="line"
						title="Health care index of countries"
						xTitle="Countries"
						yTitle="Healthcare Index"
						data={this.state.healthData}
					/> : <p>Loading</p>}
				</div>
			</div>
		)
	}
}

export default Countries