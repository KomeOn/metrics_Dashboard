import React from 'react';

export default class HistoricalDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: [],
      data: [],
      clickExpand : false
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
    console.log("header: ", index)
    if (index.length > 0)
    index.unshift("DATE")
    return index;
  }

  tableData() {
    let dataArr = [];
    console.log(this.props.data)
    for (const key in this.props.data) {
      let temp = [];
      temp.push(key + "");
      for (const val in this.props.data[key]) {
        let i = this.props.data[key][val].indexOf(":")
        let str = this.props.data[key][val].substr(i + 1);
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
      rowValues.map((row) => {
        let r = [];
        tableRows.push(<tr>
          {row.map((r) => (<td>{r}</td>))}
        </tr>)
      })
    }
    let first5 = [];
    let first5table = []
    let first3 = [];
    let first3table = [];
    if (rowValues) {
      first5 = rowValues.slice(0, 5).map((row) => {
        let r = [];
        first5table.push(<tr>
          {row.map((r) => (<td>{r}</td>))}
        </tr>)
      })
      // first3 = rowValues.slice(0, 3).map((row) => {
      //   let r = [];
      //   first3table.push(<tr>
      //     {row.map(r => (<td>{r}</td>))}
      //   </tr>)
      // })
      // first5table.push(<tr>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td></td>
      //   <td class="btn-floating btn-large waves-effect waves-light red" onClick={()=>console.log("CLicked view more")}><i class="material-icons">expand_more</i></td>
      //   <td onClick={()=>console.log("CLicked view more")}><i class="material-icons">expand_more</i></td>
      //   </tr>)
    }
    return (
      <>
        <div className="container center" style={{ "marginTop": "35px", "width": "95%" }}>

          <div className="card horizontal" style={{"width": "100%"}}>
            <div className="card-stacked" style={{"width": "100%"}}>

              <table className="centered responsive-table highlight" style={{"width": "100%"}}>
                <thead className="indigo darken-3" style={{"width": "fit-content"}}>
                  <tr style={{ "color": "white" }}>
                    {columnHeaders.map((item) => (
                      <th>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.clickExpand ? tableRows : first5table}
                  {/* {first5table} */}
                </tbody>
              </table>
            </div>
          </div>
        { this.props.data && 
          <a className="btn-floating btn-large waves-effect waves-light red" 
          onClick={() => {this.setState({clickExpand : !this.state.clickExpand})}}>
            {this.state.clickExpand ? <i className="material-icons">expand_less</i>: <i className="material-icons">expand_more</i>}
            </a>}
        </div>
      </>
    );
  }
}