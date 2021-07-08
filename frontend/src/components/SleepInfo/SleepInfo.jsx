import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { radialOptions, lineOptions } from "./graphConfig.js"
import './SleepInfo.css'

const TYPES = [
    "tempRoomC",
    "tempBedC",
    "respiratoryRate",
    "heartRate",
    "heating",
]

const PARSE_TYPE = {
    tempRoomC: 'Room Tempature °C',
    tempBedC: 'Bed Tempature °C',
    respiratoryRate: 'Respiratory Rate',
    heartRate: 'Heart Rate',
}

class SleepInfo extends Component {
    constructor(props){
        super(props)
        const index = 0
        this.state = {
            index,
        }
    }
    getSeries = () => {
        const { index } = this.state;
        const type = TYPES[index]
        if(type === 'tnt') return [{}];
        const { sleepInterval } = this.props
        const data = sleepInterval.timeseries[type]
        return [
            {
                data: data.map(([date, value], index)=>{
                    const series = {
                        x: new Date(date).getTime(),
                        y:  Math.round(100*value)/100
                    }
                    return series
                })
            }
        ]
    }

    increment = () => {
        const { index } = this.state;
        const value = index+1 === TYPES.length-1 ? 0 : index + 1
        this.setState({index: value })
    }

    renderCharts = () => {
        const { sleepInterval } = this.props       
        return <>
            <div className="sleepinfo-content-circle-graph">
                <Chart type="radialBar" series={[sleepInterval.score]} options={radialOptions} height={"100%"} />
            </div>
            <div className="sleepinfo-content-line-graph">
                <Chart type="line" series={this.getSeries()} options={lineOptions} width={700} height={190} />
            </div>
        </>;
    }

    render = () => {
        const { loading, sleepInterval } = this.props
        const { index } = this.state;
        const type = TYPES[index]

        return (
            <div className="sleepinfo">
                <div className={`sleepinfo-content ${loading}`}>
                    <h1> 
                        Sleep Info 
                        <span className='sleepinfo-content-type' >{` ${PARSE_TYPE[type]}`}</span>
                        <span className='sleepinfo-content-button' onClick={this.increment}> Next </span> 
                    </h1>
                    <div className="sleepinfo-content-graphs">
                        {sleepInterval 
                            ? this.renderCharts()
                            : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default SleepInfo