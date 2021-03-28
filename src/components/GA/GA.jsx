import {useEffect} from 'react'
import { AnalyticsDashboard } from "react-analytics-charts";
// Over ten different commonly used charts are available
import { 
	SessionsByDateChart, 
	SessionsGeoChart,
	ActiveUsersChart,
	SessionsByDeviceCategoryChart,
	PageViewsPerPathChart,
	SessionDurationChart,
	SessionsByUserTypeChart,
	SessionsBySourceChart,
	SessionsByHourChart
} from "react-analytics-charts";

import ReactGA from 'react-ga'
import Layout from '../Layout/Layout'

import './ga.css'

const GA = (props) => {

	useEffect(() => {
	    ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Layout>
			<div className="p-1 bg-light">
				<AnalyticsDashboard
				  authOptions={{ clientId: "433282736531-imqoc45og8qd4v7vu58vqar8udj1qsdn.apps.googleusercontent.com" }}
				  renderCharts={(gapi, viewId) => {
				    const chartStyles = {
				      margin: "15px",
				      maxWidth: 400,
				    };
				    return (
				      <div style={{ display: "flex", flexWrap: "wrap" }}>
				      	<ActiveUsersChart
					        gapi={gapi}
					        viewId={viewId}
					        days={28}
					        activeUserDays={7}
					    	style={chartStyles}
					    />
				        <SessionsByDateChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				          showPageViews
				          showUsers
				        />
				        <SessionsGeoChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				          showPageViews
				          options={{ width: 400 }}
				        />
				        <SessionsBySourceChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				        />
				        <SessionsByHourChart gapi={gapi} viewId={viewId} style={chartStyles} />
				        <PageViewsPerPathChart
				          gapi={gapi}
				          viewId={viewId}
				          style={{ margin: "15px" }}
				        />
				        <SessionsByDeviceCategoryChart gapi={gapi} viewId={viewId} days={28} style={chartStyles} />
				        <SessionsByUserTypeChart gapi={gapi} viewId={viewId} days={28}  style={chartStyles}/>
				      </div>
				    );
				  }}
				/>
			</div>
		</Layout>
	)
}

export default GA