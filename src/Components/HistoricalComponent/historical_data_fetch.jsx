import React from 'react';
import HistoricalDataTable from './historical_data_table';
import { companySymbols, apikey, demoData } from '../common';

export default class HistoricalDataFetch extends React.Component {
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.handleActive = this.handleActive.bind(this)
        this.state = {
            isLoading: false
        }
    }

    async fetchData(event, compName = 'IndiaMART') {
        let companyName = companySymbols[compName]
        // const respJson = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${companyName}&outputsize=full&apikey=${apikey}`)
        // const data = await respJson.json()
        
        this.props.retrieveData(demoData)
        // this.props.retrieveData(data)
    }

    handleActive(id) {
        for(var i = 1; i < 5; i++){
            document.getElementById(i).classList.remove("active")
        }
        document.getElementById(id).classList.add("active")
    }

    render() {
        return (
            <nav className="nav-extended indigo darken-3">
            <div className="nav-content center">
            <ul className="tabs tabs-transparent" style={{"display": "flex", "justifyContent": "space-evenly"}}>
                <li className="tab " id="1">
                <a onClick={(e) => {this.fetchData(e, Object.keys(companySymbols)[0]); this.handleActive(1) }}>{Object.keys(companySymbols)[0]}</a>
                </li>
                <li className="tab " id="2">
                <a onClick={(e) => {this.fetchData(e, Object.keys(companySymbols)[1]); this.handleActive(2) }}>{Object.keys(companySymbols)[1]}</a>
                </li>
                <li className="tab " id="3">
                <a onClick={(e) => {this.fetchData(e, Object.keys(companySymbols)[2]); this.handleActive(3) }}>{Object.keys(companySymbols)[2]}</a>
                </li>
                <li className="tab " id="4">
                <a onClick={(e) => {this.fetchData(e, Object.keys(companySymbols)[3]); this.handleActive(4) }}>{Object.keys(companySymbols)[3]}</a>
                </li>
            </ul>
            </div>
            </nav>
        )
    }
}