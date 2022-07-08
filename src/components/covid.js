import React, { useEffect, useState } from "react";
import './covid.css';

function Covid() {

    const [data, setData] = useState([])

  const getCovidData = async() => {
    try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
    }
    catch(err){
        console.log(err);
    }
  } 
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      
      <ul>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>OUR </span>COUNTRY</p>
                    <p className="card-detail">INDIA</p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>TOTAL </span>RECOVERED</p>
                    <p className="card-detail">{data.recovered}</p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>TOTAL </span>CONFIRMED</p>
                    <p className="card-detail">{data.confirmed}</p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>TOTAL </span>DEATH</p>
                    <p className="card-detail">{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>TOTAL </span>ACTIVE</p>
                    <p className="card-detail">{data.active}</p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card-main"> 
                <div className="card-inner">
                    <p className="card-name"><span>LAST </span>UPDATED</p>
                    <p className="card-detail">{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
        
      </ul>
    </>
  );
}

export default Covid;
