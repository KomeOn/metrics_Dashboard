import React from 'react';
import CanvasJSReact from '../../js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
export default class HistoricalDataChart extends React.Component {
    constructor(props){
        super(props)
    }

	render() {
<<<<<<< HEAD
		let dateArray = [];
		let dates = Object.keys(this.props.data)
		dateArray = dates.map((d) => {
			d = d.split("-");
			let newDate = new Date(d[0], d[1] - 1, d[2]);
			return newDate.getTime();
		})
		let valuesArray = [];
		let values = Object.values(this.props.data);
		valuesArray = values.map((v) => {
			return Object.values(v).slice(0,4);
		})
		for(let i=0; i<dates.length;i++) {
			let temp1 = Object.values(valuesArray[i])
			 let temp2 = temp1.map((t) =>{
				 return parseInt(t);
			 })
			dataPoints.push({
				x : dateArray[i],
				y :temp2 
			})
		}
=======
		
>>>>>>> 8b11ae9c55277f9b6c3791b78d66dcb1f4f05466
		const options = {
			exportEnabled: true,
			title: {
				text: "Company Stock Price"
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				title: "Price",
				prefix: "₹"
			},
			data: [{
				type: "candlestick",
				name: "Company",
				showInLegend: true,
				yValueFormatString: "₹##0.00",
				xValueType: "dateTime",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			{dataPoints.length>0 &&
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
	}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}