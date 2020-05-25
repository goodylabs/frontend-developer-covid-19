import React,{useState, useEffect} from 'react';
import {fetchSummaryData} from "../../Api/APIUtil";
import {Bar} from "react-chartjs-2";

import styles from './Chart.module.css';


const BarChart = ({Data: {Global}}) =>{
    const [GlobalData, setGlobaldata] = useState([]);
    useEffect(() => {
        const fetchAPI =  async () =>{
            setGlobaldata(await fetchSummaryData());
        }
        fetchAPI();
    }, []);

    const BarChart =(
        Global.TotalConfirmed ? (<Bar data={{
            labels: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered'],
            datasets: [{
                label: 'Powered by https://api.covid19api.com/summary',
                backgroundColor: '#13ddb0',
                data: [Global.TotalConfirmed, Global.TotalDeaths, Global.TotalRecovered]
            }]
            }}
                                  options={{
            title: {Legend:false,
                display:true, text: 'Global statistics in a BarChart'}
            }}
        />) : null
        );

    return(
        <div className={styles.container}>
            {BarChart}
        </div>
    )
}

export default BarChart;