import React, { Component } from "react";
import Chart from 'react-apexcharts'

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [66],
      options: {
        chart: {
          height: 220,
          type: 'radialBar',
          offsetY: 0
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
              name: {
                show: true
              },
              value: {
                offsetY: 10,
                fontSize: '20px',
                formatter: function (val) {
                  return val;
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 0
        },
        labels: ['Percent'],
      },
    };
  }

  render() {
    return (
      <div className="RadialBar">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
      </div>
     );
    }
  }

export default RadialBar;