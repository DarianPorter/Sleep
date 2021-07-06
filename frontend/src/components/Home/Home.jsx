import React, { Component } from 'react'
import SideNav from '../SideNav'
import SleepGraph from '../SleepGraph'
import SleepInfo from '../SleepInfo'
import './Home.css'

class Home extends Component {
    componentDidMount = () => {

    }
    
    render = () => {
        return (
            <div className="home">
                <SideNav/>
                <div className="home-right-content">
                    <SleepInfo/>
                    <SleepGraph/>
                </div>
            </div>
        )
    }
}

export default Home