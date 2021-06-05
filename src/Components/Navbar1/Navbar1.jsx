import React, { Component } from 'react';
import ChartDashboard from '../Charts/ChartDashboard';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import '../../css/navbar1.css';

class Navbar1 extends Component {
    render() {
        return (
            <div>
                <nav class="navbar1">
                    <ul>
                        <li>Overview</li>
                        <li>Dashboard</li>
                    </ul>
                    <CompanyOverview/>
                    <ChartDashboard/>
                </nav>
            </div>
        );
    }
}

export default Navbar1;