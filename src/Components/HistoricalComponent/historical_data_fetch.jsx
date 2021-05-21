import React from 'react';
import HistoricalDataTable from './historical_data_table';
import { companySymbols, apikey, demoData } from '../common';

export default class HistoricalDataFetch extends React.Component {
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this)
    }

    async fetchData(event, compName = 'IndiaMART') {
        let companyName = companySymbols[compName]
        const respJson = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${companyName}&outputsize=full&apikey=${apikey}`)
        const data = await respJson.json()

        // this.props.retrieveData(demoData)
        this.props.retrieveData(data)
    }

    render() {
        return (
            <div class="row">
                <button class="col" onClick={(e) => this.fetchData(e, Object.keys(companySymbols)[0])}>{Object.keys(companySymbols)[0]}</button>
                <button class="col" onClick={(e) => this.fetchData(e, Object.keys(companySymbols)[1])}>{Object.keys(companySymbols)[1]}</button>
                <button class="col" onClick={(e) => this.fetchData(e, Object.keys(companySymbols)[2])}>{Object.keys(companySymbols)[2]}</button>
                <button class="col" onClick={(e) => this.fetchData(e, Object.keys(companySymbols)[3])}>{Object.keys(companySymbols)[3]}</button>
            </div>
        )
    }
}