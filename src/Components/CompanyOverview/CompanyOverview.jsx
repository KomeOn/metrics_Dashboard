import React, {useState} from 'react';
import '../../css/company.css'
import {staticData} from '../../static/static_data';
import Card from './Card';

function retrieveCompanyData(name) {
    let result = staticData.filter((obj)=>{
        if(obj && obj["Company Name"]==name) {
            return obj
        }
    })
    return result;
}

function CompanyOverview(props) {
    const [view, setView] = useState(false);
    let result = retrieveCompanyData("IndiaMART Intermesh Pvt. Ltd");
    let entries = result ? Object.entries(result[0]):''
    return (
        <div class="company bg-dark" style={{marginRight:"0px;"}}>
            <h1 class="mb-3 "><span onClick={()=>setView(!view)}>{view ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}</span> Overview </h1>
            {view ?
            <div class="row row-cols-1 row-cols-md-6 g-3">
                {entries && entries.map((item)=> { 
                    return <Card key1={item[0]} value1={item[1]}/>
                })}
            </div> : ''}
        </div>
    );
}

export default CompanyOverview;