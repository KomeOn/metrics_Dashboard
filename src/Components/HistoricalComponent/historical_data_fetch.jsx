import React from 'react';
import HistoricalDataTable from './historical_data_table';
import { companySymbols, apikey, demoData, kpiChart1} from '../common';
import '../../css/header.css';
export default class HistoricalDataFetch extends React.Component {
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.handleActive = this.handleActive.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            isLoading: false
        }
    }

    async fetchData(event, compName = 'IndiaMART') {
        let companyName = companySymbols[compName]
        // const respJsonData = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${companyName}&outputsize=full&apikey=${apikey}`)
        // const respJsonKPI = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${compName}&apikey=DIEVPM711FQ1O9HE`)
        // const data = await respJsonData.json()
        // const kpis = await respJsonKPI.json()
        // console.log("KPI API: ", respJsonKPI)
        // console.log("KPI API JSON: ", kpis)
        // this.props.retrieveData(demoData, kpis)
        // this.props.retrieveData(data,kpis)
        this.props.retrieveData(demoData, kpiChart1)

    }

    handleChange(e) {
        // console.log(e.target.value);
        this.fetchData(e, e.target.value);
    }

    handleActive(id) {
        for(var i = 1; i < 5; i++){
            document.getElementById(i).classList.remove("active")
        }
        document.getElementById(id).classList.add("active")
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark fixed-top header">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <h3 class="header-title">Metrics Dashboard</h3>
                        </a>
                        <div class="select">
                            <select name="slct" id="slct" onChange={(e)=>this.handleChange(e)}>
                                <option selected disabled>Choose a tech stock</option>
                                <option value="HCL">HCL</option>
                                <option value="IndiaMART">IndiaMART</option>
                                <option value="TCS">TCS</option>
                                <option value="Tech Mahindra">Tech Mahindra</option>
                                <option value="Infosys">Infosys</option>
                                <option value="IBM">IBM</option>
                            </select>
                        </div>
                    </div>
                </nav>
                {/* <nav className="nav-extended indigo darken-3">
                    <div className="nav-content center">
                        <ul className="tabs tabs-transparent" style={{ "display": "flex", "justifyContent": "space-evenly" }}>
                            <li className="tab " id="1">
                                <a onClick={(e) => { this.fetchData(e, Object.keys(companySymbols)[0]); this.handleActive(1) }}>{Object.keys(companySymbols)[0]}</a>
                            </li>
                            <li className="tab " id="2">
                                <a onClick={(e) => { this.fetchData(e, Object.keys(companySymbols)[1]); this.handleActive(2) }}>{Object.keys(companySymbols)[1]}</a>
                            </li>
                            <li className="tab " id="3">
                                <a onClick={(e) => { this.fetchData(e, Object.keys(companySymbols)[2]); this.handleActive(3) }}>{Object.keys(companySymbols)[2]}</a>
                            </li>
                            <li className="tab " id="4">
                                <a onClick={(e) => { this.fetchData(e, Object.keys(companySymbols)[3]); this.handleActive(4) }}>{Object.keys(companySymbols)[3]}</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </div>
        )
    }
}