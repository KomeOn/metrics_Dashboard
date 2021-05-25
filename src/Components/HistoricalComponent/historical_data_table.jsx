import React from 'react';
  
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
//     }
//     return (
//       <>
//         <div className="container center" style={{ "marginTop": "35px", "width": "95%" }}>
//           <div className="card horizontal" style={{"width": "100%"}}>
//             <div className="card-stacked" style={{"width": "100%"}}>

//               <table className="centered responsive-table highlight" style={{"width": "100%"}}>
//                 <thead className="indigo darken-3" style={{"width": "fit-content"}}>
//                   <tr style={{ "color": "white" }}>
//                     {columnHeaders.map((item) => (
//                       <th>{item}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.clickExpand ? tableRows : first5table}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         { this.props.data && 
//           <a className="btn-floating btn-large waves-effect waves-light red" 
//           onClick={() => {this.setState({clickExpand : !this.state.clickExpand})}}>
//             {this.state.clickExpand ? <i className="material-icons">expand_less</i>: <i className="material-icons">expand_more</i>}
//             </a>}
//         </div>
//       </>
//     );
//   }
// }

export default class HistoricalDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: [],
      data: [],
      clickExpand : false
    }
    this.columnHeaders = ''
    this.rowValuess = ''
    this.tableRows = []
    this.first5 = []
    this.first5table = []
    this.tableHeader = this.tableHeader.bind(this)
    this.tableData = this.tableData.bind(this)
    this.tableManipulation = this.tableManipulation.bind(this)
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

  tableManipulation(evt, type) {
    if(type==="Daily"){

    }
  }
  render() {
    this.columnHeaders = this.tableHeader();
    this.rowValues = this.tableData();
    if (this.rowValues) {
      this.rowValues.map((row) => {
        let r = [];
        this.tableRows.push(<tr>
          {row.map((r, i) => (i == 0 ? <th scope="row" className="table-active">{r}</th> : <td>{r}</td>))}
        </tr>)
      })
      this.first5 = this.rowValues.slice(0, 5).map((row) => {
        let r = [];
        this.first5table.push(<tr>
          {row.map((r, i) => (i == 0 ? <th scope="row" className="table-active">{r}</th> : <td>{r}</td>))}
        </tr>)
      })
    }
    
    return (
        <div className="table-responsive py-4 mx-4 text-center">
          <div>
            <button onClick={(e) => this.tableManipulation(e, "Daily")}>Daily</button>
            <button onClick={(e) => this.tableManipulation(e, "Monthly")}>Monthly</button>
            <button onClick={(e) => this.tableManipulation(e, "Yearly")}>Yearly</button>
          </div>
          <table class="table table-sm table-hover">
            <thead class="table-dark">
              <tr style={{ "color": "white" }}>
                {this.columnHeaders.map((item) => (
                  <th scope="col">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.clickExpand ? this.tableRows : this.first5table}
            </tbody>
          </table>

          {this.props.data &&
            <a className="btn-floating btn-large waves-effect waves-light red"
              onClick={() => { this.setState({ clickExpand: !this.state.clickExpand }) }}>
              {this.state.clickExpand ? <i className="material-icons">expand_less</i> : <i className="material-icons">expand_more</i>}
            </a>}
        </div>
    );
  }
}

