/* FullChart.js */
import React, { Component } from "react";
import CanvasJSReact from './canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
 
class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = { dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false };
  }
 
  componentDidMount() {
    //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
    fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then(res => res.json())
      .then(
        (data) => {
          var dps1 = [], dps2 = [], dps3 = [];
          for (var i = 0; i < data.length; i++) {
            dps1.push({
              x: new Date(data[i].date),
              y: [
                Number(data[i].open),
                Number(data[i].high),
                Number(data[i].low),
                Number(data[i].close)
              ]
            });
            dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
            dps3.push({x: new Date(data[i].date), y: Number(data[i].close)});
          }
          this.setState({
            isLoaded: true,
            dataPoints1: dps1,
            dataPoints2: dps2,
            dataPoints3: dps3
          });
        }
      )
  }
 
  render() {
    const options = {
      theme: "dark2",
    // backgroundColor:"#212529",
      title:{
        text:"Company StockChart with Date-Time Axis",
        fontColor:"#E6E3E3",
        fontWeight:"bold",
        fontSize:"30",
        fontFamily:"Calibri"
      },
      subtitles: [{
        text: "Price-Volume Trend",
        fontColor:"#E6E3E3",
        fontWeight:"bold",
        fontSize:"15",
        fontFamily:"Calibri"
      }],
      charts: [{
        axisX: {
          lineThickness: 5,
          tickLength: 0,
          labelFormatter: function(e) {
            return "";
          },
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            labelFormatter: function(e) {
              return "";
            }
          }
        },
        axisY: {
          title: "Price",
          prefix: "₹",
          tickLength: 0,
          titleFontColor:"#E6E3E3",
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Price (in USD)",
          yValueFormatString: "$#,###.##",
          type: "candlestick",
          dataPoints : this.state.dataPoints1
        }]
      },{
        height: 100,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Volume",
          prefix: "₹",
          tickLength: 0,
          titleFontColor:"#E6E3E3"
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Volume",
          yValueFormatString: "₹#,###.##",
          type: "column",
          dataPoints : this.state.dataPoints2
        }]
      }],
      navigator: {
        data: [{
          dataPoints: this.state.dataPoints3
        }],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01")
        }
      }
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto"
    };
    return (
      <div class="bg-dark pt-4 pb-4"> 
        <div class="container">
          {
            this.state.isLoaded && 
            <CanvasJSStockChart containerProps={containerProps} options = {options}
              /* onRef = {ref => this.chart = ref} */
            />
          }
        </div>
      </div>
    );
  }
}
export default FullChart;