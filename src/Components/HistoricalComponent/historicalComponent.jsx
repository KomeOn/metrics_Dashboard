import React from 'react';
import HistoricalDataFetch from './historical_data_fetch';
import HistoricalDataTable from './historical_data_table';
import HistoricalDataChart from './historical_data_chart';
import HistoricalDataKPI from './historical_data_KPI';
import '../../css/historical.css';
import HistoricalDataKpiChart from './historical_data_kpi_chart';

export default class HistoricalComponent extends React.Component{
    constructor(props){
        super(props);
        this.retrieveData = this.retrieveData.bind(this);
        this.state = {
            data: '',
            kpi: ''
        }
    }

    retrieveData(data, kpi) {
        console.log("KPI's: ", kpi)
        this.setState({data: data['Monthly Adjusted Time Series'], kpi: kpi})
        console.log(this.state.data)
    }
    render() {
        return (
            <>
                <div className="boxShadow">
                    <HistoricalDataFetch retrieveData={this.retrieveData} />
                </div>
                <HistoricalDataKPI kpi={this.state.kpi} data={this.state.data} />
                <HistoricalDataChart data={this.state.data} />
                <HistoricalDataTable data={this.state.data} />
            </>
        )
    } 
}