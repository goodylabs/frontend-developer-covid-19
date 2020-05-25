import React,{useState, useEffect} from 'react';
import {fetchCountriesData} from "../../Api/APIUtil";
import {Line, Bar} from "react-chartjs-2";

import styles from './Chart.module.css';


const Chart = ({country}) =>{
    const [dayOneData, setDayOnedata] = useState([]);
    useEffect(() => {
        const fetchAPI =  async () =>{
            setDayOnedata(await fetchCountriesData(country));
        }

        fetchAPI();
    }, []);

    const lineChart =(
        dayOneData!==undefined ? (
        <Line options={{
            legend: {
                labels: {
                    fontColor: 'black',
                    fontSize: 18,

                },
            }}
        }
            data = {{
                labels: dayOneData.map(({Date}) => Date),
                datasets: [{
                    data: dayOneData.map(({Confirmed}) => Confirmed),
                    label: 'Infected',
                    backgroundColor: 'rgba(0,0,255, 0.2)',
                    borderColor: '#3333ff',
                    fill: true,
                },
                    {
                        data: dayOneData.map(({Deaths}) => Deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0, 0.5)',
                        fill: true,
                },
                    {
                        data: dayOneData.map(({Recovered}) => Recovered),
                        label: 'Recovered',
                        backgroundColor: 'rgba(0,255,0, 0.1)',
                        borderColor: 'rgba(38, 166, 91, 1)',
                        fill: true,
                    }]
            }}
        />) : null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;