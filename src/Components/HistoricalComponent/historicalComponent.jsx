import React from 'react';
import HistoricalDataFetch from './historical_data_fetch';
import HistoricalDataTable from './historical_data_table';
import HistoricalDataChart from './historical_data_chart';
import HistoricalDataKPI from './historical_data_KPI';
import '../../css/historical.css';

export default class HistoricalComponent extends React.Component{
    constructor(props){
        super(props);
        this.retrieveData = this.retrieveData.bind(this);
        this.state = {
            data: ''
        }
    }

    retrieveData(data) {
        this.setState({data: data['Monthly Adjusted Time Series']})
        console.log(this.state.data)
    }
    render() {
        return (
            <>
                <div className="boxShadow">
                    <HistoricalDataFetch retrieveData={this.retrieveData} />
                </div>
                <HistoricalDataKPI data={this.state.data} />
                <HistoricalDataChart data={this.state.data} />
                <HistoricalDataTable data={this.state.data} />
            </>
        )
    } 
}