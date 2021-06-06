import React from 'react';
import reactDom from 'react-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export default class HistoricalDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickExpand: false,
      data: '',
      columnHeaders: '',
      rowValues: '',
      table: ''
    }
    
    // this.dailyData = ''
    this.monthlyData = ''
    this.yearlyData = ''
    // this.columnHeaders = []
    // this.rowValues = []
    // this.table = []
    this.tableHeader = this.tableHeader.bind(this)
    this.tableData = this.tableData.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.tableManipulation = this.tableManipulation.bind(this)
    this.dataOrder = this.dataOrder.bind(this)
  }

  tableHeader(data) {
    console.log("data: ",data)
    let key = Object.values(data)
    let val = Object.keys(key[0])
    console.log("val: ",val)
    // let arr = data[val] || {}
    // let JsonArr = []
    // JsonArr.push(val)
    // console.log("JSONS: ", JsonArr)
    let index = [];
    index = val.map((keys) => {
      return keys.slice(3).toUpperCase()
    })
    console.log("header: ", index)
    if (index.length > 0)
    index.unshift("DATE")
    console.log("index: ", index)
    return index;
    // return []
  }

  tableData(Dname) {
    let dataArr = [];
    console.log("tableData: ",Dname)
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
      this.setState({columnHeaders: this.tableHeader(this.state.data[0]["Time Series (Daily)"])})
      this.setState({rowValues: this.tableData(this.state.data[0]["Time Series (Daily)"])})
      this.setState({table: this.dataOrder("Daily")})
    }
    else if(type==="Monthly"){
      this.setState({columnHeaders: this.tableHeader(this.state.data[0]["Monthly Adjusted Time Series"])})
      this.setState({rowValues: this.tableData(this.state.data[0]["Monthly Adjusted Time Series"])})
      this.setState({table: this.dataOrder("Monthly")})
    }
    else if(type==="Yearly"){
      this.setState({columnHeaders: this.tableHeader(this.state.data[0]["Yearly Adjusted Time Series"])})
      this.setState({rowValues: this.tableData(this.state.data[0]["Yearly Adjusted Time Series"])})
      this.setState({table: this.dataOrder("Yearly")})
    }
  }

  dataOrder(type) {
    let tableRows = []
    let first5 = []
    let first5table = []
    switch(type){
      case "Daily":
        if (this.state.rowValues) {
          this.state.rowValues.map((row) => {
            tableRows.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
              </tr>)
          })
          first5 = this.state.rowValues.slice(0, 5)
          first5.map((row) => {
            first5table.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
              </tr>)
          })
        }
        return [tableRows, first5table]
      case "Monthly":
        if (this.state.rowValues) {
          this.state.rowValues.map((row) => {
            tableRows.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
              </tr>)
          })
          first5 = this.state.rowValues.slice(0, 5)
          first5.map((row) => {
            first5table.push(
              <tr>
                {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
              </tr>)
          })
        }
        return [tableRows, first5table]
      case "Yearly": 
      if (this.state.rowValues) {
        this.state.rowValues.map((row) => {
          tableRows.push(
            <tr>
              {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
            </tr>)
        })
        first5 = this.state.rowValues.slice(0, 5)
        first5.map((row) => {
          first5table.push(
            <tr>
              {row.map((r, i) => (i === 0 ? <th scope="row" index={i} className="table-active text-light">{r}</th> : <td className="text-light">{r}</td>))}
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

  componentDidMount(){
    import(`../../static/${this.props.companyName}_data.js`).then(
      module => this.setState({data: module.Data})
    ).then(
      () => this.tableHeader(this.state.data[0]["Time Series (Daily)"])
      ).then(columnHeaders => this.setState({columnHeaders: columnHeaders})).then(
        () => console.log("headers: ", this.state.columnHeaders)
      ).then(
        () => this.tableData(this.state.data[0]["Time Series (Daily)"])
      ).then(rowValues => this.setState({rowValues: rowValues})).then(
        () => console.log("row: ", this.state.rowValues)
      ).then(
        () => this.dataOrder("Daily")
      ).then(table => this.setState({table: table})).then(
        () => console.log("table: ", this.state.table)
      )
  }
  render() {
    console.log("this: ", this.props)
    
    console.log("data: ", this.state.rowValues)
    return (
        <div className="table-responsive py-4 mx-4">
          {this.state.data && 
          <><div className="container ">
          <div className="row border border-0">
          <div className="col-md-5">
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Daily")}}>Daily</MDBBtn>
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Monthly")}}>Monthly</MDBBtn>
            <MDBBtn className='mx-2 my-4' color='info' toggle onClick={(e) => {this.toggleButton(e); this.tableManipulation(e, "Yearly")}}>Yearly</MDBBtn>
            </div>
            <h3 className="col-md-4 d-flex align-items-center">{this.props.companyName}</h3>
            {/* <input className="col-md-3 mb-4 mt-4" value={this.rowValues[0][0]} type="date" /> */}
            {console.log(this.state.rowValues)}
          </div>
          </div>
          <table class="table table-sm table-hover text-center">
            <thead class="table-dark">
              <tr style={{ "color": "white" }}>
                {this.state.columnHeaders && this.state.columnHeaders.map((item) => (
                  <th scope="col">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody id="tableB">
              {this.state.clickExpand ? this.state.table[0] : this.state.table[1]}
            </tbody>
          </table></>}

          {this.state.data &&
            <a className="btn-floating btn-large waves-effect waves-light red"
              onClick={() => { this.setState({ clickExpand: !this.state.clickExpand }) }}>
              {this.state.clickExpand ? <i className="material-icons">expand_less</i> : <i className="material-icons">expand_more</i>}
            </a>}
        </div>
    );
  }
}

