import React from 'react';

export default class HistoricalDataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            meta: [],
            data: [],
        }
        this.tableHeader = this.tableHeader.bind(this)
        // this.tableData = this.tableData.bind(this)
    }
    
    tableHeader() {
            let val = Object.keys(this.props.data)[0]
            let arr = this.props.data[val] || {}
            let JsonArr = []
            JsonArr.push(Object.keys(arr))
            let index = [];
            index = JsonArr[0].map((keys) => {
                    return keys.slice(3).toUpperCase()
                })
            if(index.length > 0)
            index.unshift("DATE")
            return index;
            }

    tableData() {
        let dataArr = [];
        console.log(this.props.data)
        for (const key in this.props.data) {
            let temp = []; 
            temp.push(key+"");  
            for (const val in this.props.data[key]){
                let i= this.props.data[key][val].indexOf(":")
                let str = this.props.data[key][val].substr(i+1);
                temp.push(str);
            }
            dataArr.push(temp);
        }
        console.log("DataArr", dataArr);
        return dataArr;
    }

  render() {
    this.tableData()
    let columnHeaders = this.tableHeader();
    let rowValues = this.tableData();
    let tableRows = [];
    if (rowValues) {
      rowValues.map((row) =>{
        let r = [];
        tableRows.push(<tr>
          {row.map((r) => (<td>{r}</td>))}
        </tr>)
      })
    }
    return (
      <>
      <div className="container" style={{"marginTop": "35px"}}>
    
       <div class="card horizontal">
      <div class="card-stacked">

        <table class="centered responsive-table highlight">
          <thead className="indigo darken-3">
            <tr style={{"color":"white" }}>
              {columnHeaders.map((item) => (
                <th>{item}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
                </div>
                </div>
                </div>
      </>
    );
  }
}