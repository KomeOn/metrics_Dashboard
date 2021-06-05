import React from 'react';
import reactDom from 'react-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export default class HistoricalDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickExpand: false,
    }
    
    this.columnHeaders = []
    this.rowValues = []
    this.table = []
    this.tableHeader = this.tableHeader.bind(this)
    this.tableData = this.tableData.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.tableManipulation = this.tableManipulation.bind(this)
    this.dataOrder = this.dataOrder.bind(this)
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

  tableData(Dname) {
    let dataArr = [];
    console.log(Dname)
    for (const key in Dname) {
      let temp = [];
      temp.push(key + "");
      for (const val in Dname[key]) {
        let i = Dname[key][val].indexOf(":")
        let str = Dname[key][val].substr(i + 1);
        temp.push(str);
      }
      dataArr.push(temp);
    }
    console.log("DataArr", dataArr);
    return dataArr;
  }

  tableManipulation(evt, type) {
    if(type==="Daily"){
      this.rowValues = []
      this.table = []
      this.columnHeaders = []
      this.rowValues = this.tableData(this.props.data);
      this.table = this.dataOrder("Daily")
      console.log("table: ", this.table)
      reactDom.render(<>{this.table[1]}</>, document.getElementsByTagName("tbody")[0] )
    }
    else if(type==="Monthly"){
      this.rowValues = []
      this.table = []
      this.rowValues = this.tableData(this.props.dataM);
      this.table = this.dataOrder("Monthly")
      console.log("table: ", this.table)
      reactDom.render(<>{this.table[1]}</>, document.getElementsByTagName("tbody")[0] )
    }
    else if(type==="Yearly"){
      this.rowValues = []
      this.table = []
      this.rowValues = this.tableData(this.props.dataY);
      this.table = this.dataOrder("Yearly")
      console.log("table: ", this.table)
      reactDom.render(<>{this.table[1]}</>, document.getElementsByTagName("tbody")[0] )
    }
  }

  dataOrder(type) {
    let tableRows = []
    let first5 = []
    let first5table = []
    switch(type){
      case "Daily":
        if (this.rowValues) {
          this.rowValues.map((row) => {
            tableRows.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
              </tr>)
          })
          first5 = this.rowValues.slice(0, 5)
          first5.map((row) => {
            first5table.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
              </tr>)
          })
        }
        return [tableRows, first5table]
      case "Monthly":
        if (this.rowValues) {
          this.rowValues.map((row) => {
            tableRows.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
              </tr>)
          })
          first5 = this.rowValues.slice(0, 5)
          first5.map((row) => {
            first5table.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
              </tr>)
          })
        }
        return [tableRows, first5table]
      case "Yearly": 
      if (this.rowValues) {
        this.rowValues.map((row) => {
          tableRows.push(
            <tr>
              {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
            </tr>)
        })
        first5 = this.rowValues.slice(0, 5)
        first5.map((row) => {
          first5table.push(
            <tr>
              {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active">{r}</th> : <td>{r}</td>))}
            </tr>)
        })
      }
      return [tableRows, first5table]
    default: return;
    }
  }
  
  toggleButton(event) {
    var ele = document.querySelectorAll("button")
    for(let i = 0; i < ele.length; i++){
      ele[i].classList.remove("active")
    }
    event.target.classList.add('active')
    console.log("event: ", event)
  }

  render() {
    console.log("this: ", this.props)
    this.columnHeaders = this.tableHeader();
    this.rowValues = this.tableData(this.props.data);
    this.table = this.dataOrder("Daily")
    console.log("data: ", this.rowValues)
    return (
        <div className="table-responsive py-4 mx-4">
          {this.props.data && 
          <div className="container ">
          <div className="row border border-0">
          <div className="col-md-5">
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Daily")}}>Daily</MDBBtn>
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Monthly")}}>Monthly</MDBBtn>
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Yearly")}}>Yearly</MDBBtn>
            </div>
            <h3 className="col-md-4 d-flex align-items-center">{this.props.cName}</h3>
            <input className="col-md-3 mb-4 mt-4" value={this.rowValues[0][0]} type="date" />
            {console.log(this.rowValues)}
          </div>
          </div>}
          <table class="table table-sm table-hover text-center">
            <thead class="table-dark">
              <tr style={{ "color": "white" }}>
                {this.columnHeaders.map((item) => (
                  <th scope="col">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.table[1]}
            </tbody>
          </table>

          {/* {this.props.data &&
            <a className="btn-floating btn-large waves-effect waves-light red"
              onClick={() => { this.setState({ clickExpand: !this.state.clickExpand }) }}>
              {this.state.clickExpand ? <i className="material-icons">expand_less</i> : <i className="material-icons">expand_more</i>}
            </a>} */}
        </div>
    );
  }
}

