import React from 'react';
import { Cards, Chart } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImg from './images/covidimg.png';

class App extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount()
  {
    const fetchedData = await fetchData();
   //console.log(fetchedData);

    this.setState({ data: fetchedData })
  }
  
  render() {
    const { data } = this.state;
    return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImg} alt="COVID-19"/>
      <h3 className={styles.titletxt}>Dane dot. zachorowań na COVID-19 na całym świecie</h3>

      <Cards data={data}/>
      
      <h3 className={styles.titletxt}>Wykres przedstwia globalne statystyki dot. liczby zainfekowanych osób oraz zgonów. </h3>
      <span className={styles.titletxt}>Pogląd wykresu możemy modyfikować przyciskając: Zainfekowani / Zgony, znajdujące się na górnej belce.</span>
      <br /> <br /> <br />
      
       <Chart />
    
    </div>
    )
  }
}

export default App