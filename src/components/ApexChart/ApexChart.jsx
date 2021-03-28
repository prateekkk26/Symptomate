import React from 'react'
import Chart from 'react-apexcharts'

import styles from './apexChart.module.css'

class ApexChart extends React.Component {

    componentDidMount() {
      this.dataExtract();
      console.log(this.props.data[0])
    }

    dataExtract() {
      const data = this.props.data[0]
      for(var key in data) {
        let value = data[key]
        this.countryName.push(key);
        this.dataValue.push(value)
      }
    }

    constructor(props) {
      super(props);
      this.countryName = []
      this.dataValue = []
      this.dataExtract = this.dataExtract.bind(this)
      this.state = {
        series: [{
          data: this.dataValue
        }],
        options: {
          chart: {
            type: `${this.props.type}`,
            height: 400,
          },
          title: {
            text: `${this.props.title}`,
            style: {
              fontSize: "12px"
            }
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: this.props.horizontal ? false : true,
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "10px"
            }
          },
          xaxis: {
            categories: this.countryName,
            labels: {
              style: {
                fontSize: "10px"
              }
            },
            title: {
              text: `${this.props.xTitle ? this.props.xTitle : ""}`
            }
          },
          yaxis: {
            title: {
              text: `${this.props.yTitle ? this.props.yTitle : ""}`
            },
            style: {
              fontSize: "2px"
            }
          }
        },
      };
    }

    render() {
      return(
        <div id="chart" className={`font-weight-bold ${styles.apexChart}`}>
        <Chart options={this.state.options} series={this.state.series} type={this.props.type} height={400} />
      </div>
      )
    }
}

export default ApexChart;