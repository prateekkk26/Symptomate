import React from 'react'
import Chart from 'react-apexcharts'
import styles from './apexChart.module.css'

class ApexChart extends React.Component {

    componentDidMount() {
      this.getData()
    }

    getData() {
      if(this.props.values && this.props.categories) {
        let val = this.props.values
        let name = this.props.categories
        for(let i=0; i<val.length; i++) {
          this.dataValue.push(parseFloat(val[i]))
          this.countryName.push(name[i])
        }
        console.log(this.dataValue)
        console.log(this.countryName)
      } else {
        for (const [key, value] of Object.entries(this.props.data)) {
          this.countryName.push(key)
          this.dataValue.push(value)
        }
      }
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
            height: 500,
            zoom: {
              enabled: true
            },
            style: {
              zIndex: 0
            }
          },
          stroke: {
            curve: 'straight'
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
              dataLabels: {
                position: 'center'
              }
            },

          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "10px",
            },
            background: {
              enabled: true,
              foreColor: '#4682B4',
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: '#4682B4'
            },
            dropShadow: {
              enabled: false,
              left: 2,
              top: 2,
              opacity: 0.5
            },
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
            categories: this.countryName,
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
          <Chart options={this.state.options} series={this.state.series} type={this.props.type} height={500} />
        </div>
      )
    }
}

export default ApexChart;