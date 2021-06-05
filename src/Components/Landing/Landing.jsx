import React from 'react';
import HistoricalComponent from '../HistoricalComponent/historicalComponent';
import landingImage from './landing3.jpg';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isLanding : true,
            companyName:''
        }
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({companyName:e.target.value, isLanding:false})
    }
    render() {
    return (
        
        <div>
            {this.state.isLanding ? <div>
             <nav class="navbar navbar-dark fixed-top header">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <h3 class="header-title">Metrics Dashboard</h3>
                        </a>
                    </div>
                </nav>
            <header>
                <div
                    class="p-5 text-center bg-image"
                    style={{
                        backgroundImage: `url(${landingImage})`,
                        height: "100vh"
                    }}>
                    <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="text-white">
                                <h2 class="mb-5">Choose your technical stock <i class="fas fa-chart-line"></i></h2>
                                <h2 class="mb-5"><i class="fas fa-arrow-down"></i></h2>
                               <button class="mb-3 h4 ms-3 btn btn-success" value="HCL" onClick={(e) => this.handleChange(e)}>HCL</button>
                               <button class="mb-3 ms-3 btn btn-secondary" value="IndiaMART" onClick={(e) => this.handleChange(e)}>IndiaMART</button>
                               <button class="mb-3 ms-3 btn btn-info" value="Wipro" onClick={(e) => this.handleChange(e)}>Wipro</button>
                               <button class="mb-3 ms-3 btn btn-warning" value="TCS" onClick={(e) => this.handleChange(e)}>TCS</button>
                               <button class="mb-3 ms-3 btn btn-danger" value="Infosys" onClick={(e) => this.handleChange(e)}>Infosys</button>
                               <button class="mb-3 ms-3 btn btn-light" value="IBM" onClick={(e) => this.handleChange(e)}>IBM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </div> : <HistoricalComponent companyName={this.state.companyName}/>}

        </div>
    );
    }
}

export default Landing;