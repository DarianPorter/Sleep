import React, { Component } from 'react'
import './SideNav.css'
import moment from 'moment'

class SideNav extends Component {
    componentDidUpdate = (prevProps) => {
        const { sleepData, selectedID, setSelectedID } = this.props
        const { sleepData: prevSleepData } = prevProps
        if (prevSleepData !== sleepData) {
            if(!selectedID) setSelectedID(this.findFirstID())
        }   
    }   

    findFirstID = () => {
        const { sleepData } = this.props
        const firstUser = sleepData[0]
        return firstUser.intervals[0].id
    }

    renderDates = () => {
        const { sleepData, selectedID, setSelectedID } = this.props
        return sleepData ? (
            <ul>
                {sleepData.map((userData, index)=>(
                    <li key={index}>
                        <h3>{`User #${index + 1}`}</h3>
                        {userData.intervals.map((datum, index2)=>{
                            const { id, ts } = datum   
                            const selected = selectedID === id ? "selected" : ""
                            const className = `sidenav-content-ul-li-date ${selected}`
                            return <div onClick={()=>(setSelectedID(id))} key={index2} className={className}>{moment(ts).format('LLL')}</div>
                         })}
                    </li>
                ))}
            </ul>
        ) : null
    }

    render = () => {
        const { loading } = this.props
        return (
            <div className="sidenav">
                <div className={`sidenav-content ${loading}`}>
                    <h1 className="sidenav-content-title">Dates</h1>
                    {this.renderDates()}
                </div>
            </div>
        )
    }
}

export default SideNav