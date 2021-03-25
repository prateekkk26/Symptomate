import { AnalyticsDashboard } from "react-analytics-charts";
// Over ten different commonly used charts are available
import { SessionsByDateChart, SessionsGeoChart } from "react-analytics-charts";

const GA = (props) => {
	return (
		<AnalyticsDashboard
		  authOptions={{
		    clientId:
		      "433282736531-imqoc45og8qd4v7vu58vqar8udj1qsdn.apps.googleusercontent.com",
		  }}
		  renderCharts={(gapi, viewId) => {
		    return (
		      <div>
		        <SessionsByDateChart
		          gapi={gapi}
		          viewId={viewId}
		          showPageViews
		          showUsers
		        />
		        <SessionsGeoChart gapi={gapi} viewId={viewId} showPageViews />
		        ... More charts here ...
		      </div>
		    );
		  }}
		/>
	)
}

export default GA