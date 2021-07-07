import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { radialOptions, lineOptions } from "./graphConfig.js"
import './SleepInfo.css'

class SleepInfo extends Component {

    renderCharts = () => {
        const { sleepInterval } = this.props
        console.log("🚨🚨🚨", sleepInterval, "🚨🚨🚨")
        return <>
            <div className="sleepinfo-content-circle-graph">
                <Chart type="radialBar" series={[sleepInterval.score]} options={radialOptions} height={"100%"} />
            </div>
            <div className="sleepinfo-content-line-graph">

            </div>
        </>;
    }

    render = () => {
        const { loading, sleepInterval } = this.props
        return (
            <div className="sleepinfo">
                <div className={`sleepinfo-content ${loading}`}>
                    <h1> Sleep Info </h1>
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