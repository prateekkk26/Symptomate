import React from 'react'
import Chart from 'react-apexcharts'

import styles from './apexChart.module.css'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: this.props.data
        }],
        options: {
          chart: {
            type: `${this.props.type}`,
            height: 400
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "10px"
            }
          },
          xaxis: {
            categories: this.props.categories,
            labels: {
              style: {
                fontSize: "10px"
              }
            },
            title: {
              text: `(${this.props.xTitle})`
            }
          },
          yaxis: {
            title: {
              text: `(${this.props.yTitle})`
            }
          }
        },
      
      
      };
    }

    render() {
      return(
        <div id="chart" className={`font-weight-bold ${styles.apexChart}`}>
          <p className="h1 my-5 text-left">{this.props.title}</p>
        <Chart options={this.state.options} series={this.state.series} type={this.props.type} height={400} />
      </div>
      )
    }
}

export default ApexChart;