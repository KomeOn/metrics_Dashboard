import React from 'react';
import HistoricalDataFetch from './historical_data_fetch';
import HistoricalDataTable from './historical_data_table';
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
                        <HistoricalDataTable data={this.state.data} />
                        </>
                )
    } 
}