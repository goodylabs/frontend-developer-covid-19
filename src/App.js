import React, {useEffect} from 'react';
import { Cards, Chart, CountryList } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import { Card, CardContent, Typography, Grid, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import coronaImg from './images/covidimg.png';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount()
  {
    const fetchedData = await fetchData();
   //console.log(fetchedData);


    this.setState({ data: fetchedData })
  }
//---
  handleCountryChange = async(country) => {
    console.log(country)
 
  }
 //---

  render() {
    const { data } = this.state;
    return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImg} alt="COVID-19"/>
      <h2 className={styles.titletxt}>Dane dot. zachorowań na COVID-19 na całym świecie</h2>

      <Cards data={data}/>
      
      <h3 className={styles.titletxt}>Wykres przedstwia globalne statystyki dot. liczby zainfekowanych osób oraz zgonów. </h3>
      <span className={styles.titletxt}>Pogląd wykresu możemy modyfikować przyciskając: Zainfekowani / Zgony, znajdujące się na górnej belce.</span>
      <br /> <br /> <br />
      

       <Chart />

       <h2 className={styles.titletxt}>Sprawdź statystyki dla poszczególnych Państw:</h2>
       <div>
        <div className={styles.infected}>Zainfekowani</div>
        <div className={styles.recovered}>Ozdrowieńcy</div>
        <div className={styles.deaths}>Zgony</div>
      </div>
     
      

      <CountryList handleCountryChange={this.handleCountryChange} /> 
    </div>
    )
  }
}

export default App