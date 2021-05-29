import React from 'react';
import HistoricalDataFetch from './historical_data_fetch';
import HistoricalDataTable from './historical_data_table';
import HistoricalDataChart from './historical_data_chart';
import HistoricalDataKPI from './historical_data_KPI';
import '../../css/historical.css';
import HistoricalDataKpiChart from './historical_data_kpi_chart';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import FullChart from '../Charts/FullChart';
import ChartDashboard from '../Charts/ChartDashboard';

export default class HistoricalComponent extends React.Component{
    constructor(props){
        super(props);
        this.retrieveData = this.retrieveData.bind(this);
        this.state = {
            data: '',
            kpi: '',
            kpiChart:''
        }
    }

    retrieveData(data, kpiChart) {
        // console.log("KPI's: ", kpi)
        this.setState({data: data['Monthly Adjusted Time Series'], kpiChart:kpiChart["Technical Analysis: RSI"]})
        console.log(this.state.data)
    }
    render() {
        return (
            <>
                <div className="" style={{"background": "#fff", "marginTop": "5.05rem"}}>
                    <HistoricalDataFetch retrieveData={this.retrieveData} />
                    <CompanyOverview data={this.props.data}/>
                </div>
                <FullChart data={this.state.data}/>
                <ChartDashboard />
                <HistoricalDataKPI kpi={this.state.kpi} data={this.state.data} />
                { <HistoricalDataKpiChart data = {this.state.kpiChart}/>}
                {/* <HistoricalDataChart data={this.state.data} /> */}
                <HistoricalDataTable data={this.state.data} />
            </>
        )
    } 
}