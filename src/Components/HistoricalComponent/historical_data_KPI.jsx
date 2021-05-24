import React from 'react'

export default class HistoricalDataKPI extends React.Component {
    constructor(props){
        super(props)
        console.log("props: ", this.props)
        this.KPIs = this.KPIs.bind(this)
        this.state = {
            KPIarr: ["ADJUSTED CLOSE", "VOLUME",  "HIGH", "LOW"]
        }
    }

    KPIs() {
        let val = Object.keys(this.props.data)[0]
        let arr = this.props.data[val] || {}
        console.log("KPI: ",arr)
        let JsonArr = Object.entries(arr)
        console.log("KPI: ",JsonArr)
        let index = [];
        // index = JsonArr[0].map((keys) => {
        // return keys.slice(3).toUpperCase()
        // })
        // console.log("KPI: ", index)
        
        return JsonArr
    }

    render() {
        let index = this.KPIs()
        return (
            <div className="row" style={{"marginTop": "35px"}}>            
                {index.map((item, index) => <KPI item={item} index={index}/>
                )}
            </div>
        )
    }
}

function KPI(props) {
    console.log(props)
    return (
        <div className="col s12 m6 l3">
            <div className="card horizontal hoverable">
                <div className="card-stacked">
                    <p className="card-title m4">{props.item[0].slice(3)}</p>
                    <div className="card-content">
                        <p>This item name is : {props.item[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}