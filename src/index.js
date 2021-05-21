import React from 'react';
import ReactDOM from 'react-dom';
import HistoricalComponent from './Components/HistoricalComponent/historicalComponent';
import './index.css';
import './css/materialize.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <hr style={{"background": "#fff", "margin": "0px"}} />
    <HistoricalComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
