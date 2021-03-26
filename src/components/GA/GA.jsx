import { AnalyticsDashboard } from "react-analytics-charts";
// Over ten different commonly used charts are available
import { 
	LineChart,
	PieChart,
	GeoChart,
	SessionsByDateChart, 
	SessionsGeoChart,
	ActiveUsersChart,
	SessionsByDeviceCategoryChart,
	PageViewsPerPathChart,
	SessionDurationChart,
	SessionsBySourceChart,
	SessionsByHourChart
} from "react-analytics-charts";
import Layout from '../Layout/Layout'

import './ga.css'

const GA = (props) => {
	return (
		<Layout>
			<div className="p-1 bg-light">
				<AnalyticsDashboard
				  authOptions={{ clientId: "433282736531-imqoc45og8qd4v7vu58vqar8udj1qsdn.apps.googleusercontent.com" }}
				  renderCharts={(gapi, viewId) => {
				    const chartStyles = {
				      width: "40rem",
				      maxWidth: "100%",
				      pading: "10px",
				    };
				    return (
				      <div style={{ display: "flex", flexWrap: "wrap",flexDirection: "column", padding: "10px" }}>
				        <div style={{width: "100%", padding: "10px",boxShadow: "2px 5px 7px black", marginBottom: "10px"}}>
				        <SessionsByDateChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				          showPageViews
				          showUsers
				        />
				        </div>
				        <SessionsGeoChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				          showPageViews
				          options={{ width: 400 }}
				        />
				        <SessionsByDeviceCategoryChart gapi={gapi} viewId={viewId} days={28} style={chartStyles} />
				        <SessionsByHourChart gapi={gapi} viewId={viewId} style={chartStyles} />
				        <PageViewsPerPathChart
				          gapi={gapi}
				          viewId={viewId}
				          style={chartStyles}
				        />
				      </div>
				    );
				  }}
				/>
			</div>
		</Layout>
	)
}

export default GA