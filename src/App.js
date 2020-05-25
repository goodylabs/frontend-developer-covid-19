import React from 'react';
import { Chart, GlobalCards, Cards, CountryPicker, BarChart} from './Components';
import {AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from './App.module..css';
import { fetchSummaryData,fetchCountrySumarry } from "./Api/APIUtil";

class App extends React.Component{
state= {
    data:undefined,
    barChartData: undefined,
    countryData: undefined,
    country: ' ',
    selected: undefined
}


    async componentDidMount() {
        const feta=await fetchSummaryData();
        const fetchedData=await fetchSummaryData();
        this.setState({barChartData: feta});
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (Country) =>{
        const fetchedCountry =await fetchCountrySumarry({});
        this.setState({countryData: fetchedCountry} );
        this.setState({country: Country});
        console.log(this.state.countryData);
        console.log(this.state.country);
        this.setState({selected: true});
    }

/******************************************************/

    render(){
        return(
            <Router>
            <div className={styles.container}>
                <AppBar position="static" color={"primary"}>
                    <Toolbar variant="dense">
                        <Typography variant="h5" display={'initial'}>
                            COVID TRACKER
                        </Typography>
                       <Link to='/'>
                        <IconButton>
                                  Country Detail
                        </IconButton>
                       </Link>
                       <Link to='/Global'>
                        <IconButton>
                                  Global
                        </IconButton>
                    </Link>
                    </Toolbar>
                </AppBar>


                <Switch>
                    <Route path="/Global" render={()=> <div>
                        <Typography variant="h2" align="center" color="secondary.dark">Global statistics</Typography>
                        {this.state.data!==undefined ? <GlobalCards Data={this.state.data}/>: <p>Loading:</p>}
                        {this.state.data!==undefined ?<BarChart Data={this.state.data}/> : <p>Loading:</p>}
                    </div>}/>;
                    <Route path="/" exact render={()=> <div>
                        <CountryPicker handleCountryChange={this.handleCountryChange}/>
                        {this.state.selected!==undefined ? <Cards Data={this.state.countryData} country={this.state.country}/>:
                            <Typography variant="h2" align="center" color="secondary.dark">Please select a country to proceed</Typography>}
                        {this.state.selected!==undefined ?<Chart country={this.state.country}/> : null}
                    </div>} />;
                </Switch>


            </div>
            </Router>
            );
        }
}

export default App;



