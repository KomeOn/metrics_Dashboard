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
import Navbar1 from '../Navbar1/Navbar1';

export default class HistoricalComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
            kpi: '',
            kpiChart:'',
            dataM: '',
            dataY: '',
            cName: ''
        }
        this.retrieveData = this.retrieveData.bind(this);
    }

    retrieveData(data, kpiChart, dataM, dataY, cName) {
        // console.log("KPI's: ", kpi)
        this.setState({dataM: dataM[0]['Monthly Adjusted Time Series'], kpiChart:kpiChart["Technical Analysis: RSI"], data: data[0]["Time Series (Daily)"], dataY: dataY[0]["Yearly Adjusted Time Series"], cName: cName})
        console.log(this.state)
    }

    
    render() {
        return (
            <>
                <div className="" style={{"background": "#fff", "marginTop": "5.05rem"}}>
                    <HistoricalDataFetch retrieveData={this.retrieveData} />
                    <Navbar1 companyName={this.props.companyName} targetId={this.props.targetId}/>
                </div>
                <FullChart data={this.state.data} companyName={this.props.companyName} targetId={this.props.targetId}/>
                <HistoricalDataKPI kpi={this.state.kpi} data={this.state.data} />
                { <HistoricalDataKpiChart data = {this.state.kpiChart}/>}
                <HistoricalDataTable cname={this.state.Cname} data={this.state.data} dataM={this.state.dataM}/>
            </>
        )
    } 
}