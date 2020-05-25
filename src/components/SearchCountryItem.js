import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/jquery/dist/jquery.js';
import axios from 'axios';
import Chart from './Chart.js';


function AlertNoData({countryName}){
	return(
		<div className="alert alert-warning" role="alert">
		  No data available for {countryName}.
		</div>
	);
}


class SearchCountryItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			count: this.props.count,
			data: []
		}
	}


	render(){
		return(
			<div>
				<p style={{cursor: "pointer"}} onClick={this.onClickHandler} key={this.state.name}> <span className="text-warning"> {this.state.count} </span> {this.state.name}   </p>
			</div>
		);
	}


	onClickHandler = () => {
		let withoutSpaces = this.state.name.split(" ").join("-");
		this.URL = `https://api.covid19api.com/country/${withoutSpaces.toLowerCase()}`;
		axios.get(this.URL)
		.then(res => this.setState({data: res.data}))
		.then(this.renderChart);
	}


	renderChart = () => {
		if(this.state.data.length > 0)
			ReactDOM.render(<Chart countryName = {this.state.name} data = {this.state.data} />, document.getElementById("charts"));
		else{
			ReactDOM.render(<AlertNoData countryName = {this.state.name} />, document.getElementById("charts"));
		}
	}
}
export default SearchCountryItem;