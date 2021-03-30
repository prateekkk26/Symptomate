import React from 'react'
import Chart from 'react-apexcharts'

import styles from './apexChart.module.css'

class ApexChart extends React.Component {

    componentDidMount() {
      this.getData()
    }

    getData() {
      let data = this.props.data
      for(const country in data) {
        this.countryName.push(country)
        this.dataValue.push(data[country])
      }
      console.log(this.countryName, this.dataValue)
    }

    constructor(props) {
      super(props);
      this.countryName = []
      this.dataValue = []
      this.getData = this.getData.bind(this)
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