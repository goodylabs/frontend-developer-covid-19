import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/jquery/dist/jquery.js';
import SearchCountries from './SearchCountries.js';
import axios from 'axios';
import { Card } from './Card.js';
import { CountryStatsRecovered } from './CountryStatsRecovered.js';
import { CountryStatsDeaths } from './CountryStatsDeaths.js';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data: [],
			countries: []
		};
	}     


	componentDidMount() {
		axios.get("https://api.covid19api.com/world/total")
		.then( (res) => {  this.setState({data: res.data}) })
		.catch(this.showError);

		axios.get("https://api.covid19api.com/summary")
		.then(res => this.setState({countries: res.data.Countries}))
		.catch(this.showError);
	}

	showError = () => {
		alert("An error occured. Please refresh page");
	}

	render(){
		return(
			<div style={{padding: '24px', background: '#282923', color: '#f1f3f6'}}>
				<div className="row" >
			    	<div className="col-xl-3" style={{height: '90vh'}}>
			    		<div className="row">
			    			<div className="col">
			    				<Card name="Total Confirmed" color="text-warning" count={this.state.data.TotalConfirmed} />
			    			</div>
			    		</div>
			    		<div className="row">
			    			<div className="col" >
			    				<div className="card bg-dark" style={{margin: '8px'}}>
								  <div className="card-body" style={{height: '80vh', overflow: 'auto'}}>
								    <SearchCountries countries = {this.state.countries}/>
								  </div>
								</div>			    				
			    			</div>
			    		</div>			
			    	</div>
			    	<div className="col-xl-5" style={{height: '90vh'}}>
			    		<div className="row">
			    			<div className="col">
			    				<h1 style={{textAlign: 'center'}}>Covid-19 Statistics</h1>
			    			</div>
			    		</div>
			    		<div className="row">
			    			<div className="col">
			    				<h6 style={{textAlign: 'center'}}>(Select country from list on the left to see charts)</h6>
			    			</div>
			    		</div>
			    		<div className="row">
			    			<div className="col">
			    				<div id="charts" style={{marginTop: '36px'}}/>
			    			</div>
			    		</div>
			    		<div className="row" style={{marginTop: '48px'}}>
			    			<div className="col"/>
			    		</div>
			    		<div className="row" >
			    			<div className="col">
			    				<div id="todayCases"/>
			    			</div>
			    			<div className="col">
			    				<div id="todayDeaths"/>
			    			</div>
			    			<div className="col">
			    				<div id="todayRecovered"/>
			    			</div>
			    		</div>
			    	</div>
			    	<div className="col-xl-4" id="allCountries" style={{height: '90vh'}}>
			    		<div className="row">
			    			<div className="col">
			    				<Card name="Total Deaths" color="text-danger" count={this.state.data.TotalDeaths} />
			    			</div>
			    			<div className="col">
			    				<Card name="Total Recovered" color="text-success" count={this.state.data.TotalRecovered} />
			    			</div>
			    		</div>
			    		<div className="row">
			    			<div className="col">
			    				<CountryStatsDeaths data = {this.state.countries}/>
			    			</div>
			    			<div className="col">
			    				<CountryStatsRecovered data = {this.state.countries}/>
			    			</div>
			    		</div>	
			   		</div>
			  	</div>
			</div>
		);
	}
}
export default App;