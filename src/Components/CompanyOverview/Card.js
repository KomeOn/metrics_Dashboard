import React from 'react';
import '../../css/company.css'

function Card(props) {
    console.log("props",props)
    return (
        <div class="col">
            <div class="card1">
                <h5 class="card-title text-center">{props.key1}</h5>
                <p class="card-text">{props.value1}</p>
                <button type="button" class="btn btn-primary">Button</button>
            </div>
        </div>
    );
}

export default Card;