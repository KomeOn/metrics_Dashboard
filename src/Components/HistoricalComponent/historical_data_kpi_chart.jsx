import React from 'react';
import CanvasJSReact from '../../js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class HistoricalDataKpiChart extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
		console.log("KPI Props",this.props.data);
		if(this.props.data) {
			let dateArray = [];
			let tArr = [];
			for(let key in this.props.data) {
				tArr.push(this.props.data[key]);
			}
			if(tArr) {
				tArr.shift()
			}
			console.log("tArr",tArr[0]);
			let tempArray = Object.keys(tArr[0]).sort().slice(0, 10).reduce(function(memo, current) { 
			  memo[current] = tArr[0][current]
			  return memo;
			}, {})
			console.log("tempArray", tempArray);
			let dates = Object.keys(tempArray)
			dateArray = dates.map((d) => {
				d = d.split("-");
				let newDate = new Date(d[0], d[1] - 1, d[2]);
				return newDate.getTime();
			})
			let valuesArray = [];
			let values = Object.values(tempArray);
			valuesArray = values.map((v) => {
				return Object.values(v).slice(0, 4);
			})
			console.log("Dates", dateArray);
			console.log("Values", valuesArray);
			for (let i = 0; i < dates.length; i++) {
				let temp1 = Object.values(valuesArray[i])
				let temp2 = temp1.map((t) => {
					return parseInt(t);
				})
				dataPoints.push({
					x: i,
					y: temp2
				})
			}
		}
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Relative Strength Index"
			},
			axisY: {
				title: "RSI",
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			{dataPoints.length>0 ?
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>:''}
		</div>
		);
	}
}

export default HistoricalDataKpiChart;