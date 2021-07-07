import React, { Component } from 'react'
import axios from 'axios'
import SideNav from '../SideNav'
import SleepGraph from '../SleepGraph'
import SleepInfo from '../SleepInfo'
import './Home.css'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            sleepData: null,
            error: null,
            selectedID: null
        }
    }

    setSelectedID = (id) => {
        this.setState({selectedID: id})
    }

    componentDidMount = () => {
        this.fetchData()
    }

    fetchData = () => {
        setTimeout(()=>{
            axios.get('http://localhost:3000/sleepData')
                .then((payload)=>{
                    const { data: response } = payload
                    this.setState({ sleepData: response.data})
                }).catch((error)=>{
                    this.setState({error})
                })
        }, 3500);
    }

    getInterval = () => {
        const { selectedID, sleepData } = this.state    
        if(!selectedID) return null;
        let selected; 
        
        sleepData.forEach((userData)=>{    
            if(!selected){
                selected = userData.intervals.find((interval)=>(
                    interval.id === selectedID
                ))
            }
        })
        return selected
    }
    
    render = () => {
        const { sleepData, selectedID } = this.state;
        const loading = sleepData ? "" : "loading";
        return (
            <div className="home">
                <SideNav setSelectedID={this.setSelectedID} selectedID={selectedID} sleepData={sleepData} loading={loading}/>
                <div className="home-right-content">
                    <SleepInfo sleepInterval={this.getInterval()} loading={loading}/>
                    <SleepGraph sleepInterval={this.getInterval()} loading={loading}/>
                </div>
            </div>
        )
    }
}

export default Home