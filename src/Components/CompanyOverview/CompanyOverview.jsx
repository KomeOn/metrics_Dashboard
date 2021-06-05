import React, {useState} from 'react';
import '../../css/company.css'
import {staticData} from '../../static/static_data';
import Card from './Card';

function retrieveCompanyData(i) {
    return staticData[i];
}

function CompanyOverview(props) {
    const [view, setView] = useState(false);
    let result = retrieveCompanyData(1);
    let entries = result ? Object.entries(result):''
    return (
        <div>
            <div class="company bg-dark">
            <h1 class="mb-3 "><span onClick={()=>setView(!view)}>{view ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}</span> Overview </h1>
            {view ?
            <div class="row row-cols-1 row-cols-md-6 g-3">
                {entries && entries.map((item)=> { 
                    return <Card key1={item[0]} value1={item[1]}/>
                })}
            </div> : ''}
        </div>
        <table class="container-2 bg-dark">
	<thead>
		<tr>
			<th><h1>Sites</h1></th>
			<th><h1>Views</h1></th>
			<th><h1>Clicks</h1></th>
			<th><h1>Average</h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Google</td>
			<td>9518</td>
			<td>6369</td>
			<td>01:32:50</td>
		</tr>
		<tr>
			<td>Twitter</td>
			<td>7326</td>
			<td>10437</td>
			<td>00:51:22</td>
		</tr>
		<tr>
			<td>Amazon</td>
			<td>4162</td>
			<td>5327</td>
			<td>00:24:34</td>
		</tr>
    <tr>
			<td>LinkedIn</td>
			<td>3654</td>
			<td>2961</td>
			<td>00:12:10</td>
		</tr>
    <tr>
			<td>CodePen</td>
			<td>2002</td>
			<td>4135</td>
			<td>00:46:19</td>
		</tr>
    <tr>
			<td>GitHub</td>
			<td>4623</td>
			<td>3486</td>
			<td>00:31:52</td>
		</tr>
	</tbody>
</table>
        </div>
    );
}

export default CompanyOverview;