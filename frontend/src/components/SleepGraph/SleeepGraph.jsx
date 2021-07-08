import React, { Component } from 'react'
import Chart from "react-apexcharts";
import moment from 'moment'
import './SleepGraph.css'
//#FF4560
const STAGE_TO_COLOR = {
    awake: "#008FFB", 
    light: "#00E396", 
    deep: "#775DD0", 
    out: "#FEB019"
}

class SleepGraph extends Component {
    formatSeries = () =>{
        const { sleepInterval } = this.props
        if(!sleepInterval) return []
        let count = moment(sleepInterval.ts).unix()
        return [
            {
                data: sleepInterval.stages.map((intData)=>{
                    const series = {
                        x: intData.stage.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
                        y: [
                            new Date(count * 1000).getTime(),
                            new Date((count + intData.duration) * 1000).getTime(),
                        ],
                        fillColor: STAGE_TO_COLOR[intData.stage]
                    }
                    count += intData.duration
                    return series
                })
            }
        ]
    }
    

    getOptions = () => {
        return {
            tooltip: {
                style: {
                  fontSize: '12px',
                },
            },
            chart: {
                toolbar: {
                    show: false,
                },
                height: '85%',
                type: 'rangeBar'
            },
            stroke:{
                colors:['#000']
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        hideOverflowingLabels: true
                    }
                }
            },
            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#f5f5f5']
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        colors: ['#f5f5f5'],
                    }
                }
            },
            yaxis: {
                show: true,
                labels: {
                    style: {
                        colors: ['#f5f5f5'],
                    }
                }
            },
            grid: {
                borderColor: 'grey',
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.05
                },
            },
        }
    }

    render = () => {
        const { loading, sleepInterval } = this.props
        return (
            <div className="sleepgraph">
                 <div className={`sleepgraph-content ${loading}`}>
                    <h1> Sleep Stages </h1>
                    { sleepInterval 
                        ? <Chart options={this.getOptions()} series={this.formatSeries()} type="rangeBar" height={'85%'} />
                        : null } 
                </div>          
            </div>
        )
    }
}

export default SleepGraph