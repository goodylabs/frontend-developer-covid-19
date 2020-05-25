import React from 'react';
import ReactDOM from 'react-dom';
import CanvasJSReact from './../canvasjs/canvasjs.react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/jquery/dist/jquery.js';
import $ from 'jquery'
import { Card } from './Card.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: [],
			confirmedCases: [],
			deaths:  [],
			recovered: [],
			chart1: null,
			chart2: null,
			chart3: null
		}
		this.c = [];
		this.d = [];
		this.r = [];
	}


	componentDidUpdate(previousProps, previousState) {
	    if (previousProps.data !== this.props.data) {
	        this.setState({data: this.props.data}, this.loadDataChart);
	    }
	}


	componentDidMount(){
		this.setState({data: this.props.data}, this.loadDataChart);	
	}


	loadDataChart = () => {
		this.setState({
			confirmedCases: [],
			deaths: [],
			recovered: []
		});
		this.c = [];
		this.d = [];
		this.r = [];
		for (let i = 0; i < this.state.data.length; i++) {
			this.c.push({
				x: new Date(this.state.data[i].Date),
				y: this.state.data[i].Confirmed
			});

			this.d.push({
				x: new Date(this.state.data[i].Date),
				y: this.state.data[i].Deaths
			});
			this.r.push({
				x: new Date(this.state.data[i].Date),
				y: this.state.data[i].Recovered
			});

			this.setState({
				confirmedCases: this.c,
				deaths: this.d,
				recovered: this.r
			});
		}	
		this.state.chart1.render();
		this.state.chart2.render();
		this.state.chart3.render();
		const todayC = (new Date(this.c[this.c.length-1].x)).toLocaleString('us-US' ,{
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
		const todayD = (new Date(this.d[this.d.length-1].x)).toLocaleString('us-US' ,{
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
		const todayR = (new Date(this.r[this.r.length-1].x)).toLocaleString('us-US' ,{
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
		ReactDOM.render(<Card name = {todayC} count = {this.c[this.c.length-1].y} color="text-warning" />, document.getElementById("todayCases"));
		ReactDOM.render(<Card name = {todayD} count = {this.d[this.d.length-1].y} color="text-danger" />, document.getElementById("todayDeaths"));
		ReactDOM.render(<Card name = {todayR} count = {this.r[this.r.length-1].y} color="text-success" />, document.getElementById("todayRecovered"));
	}


	render(){
		const optionsChart1 = {
			theme: "dark1",
			title: {
				text: this.props.countryName
			},
			axisY: {
				title: "Number of confirmed cases",
				prefix: "",
				includeZero: false
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#",
				dataPoints: this.state.confirmedCases
			}]
		};
		const optionsChart2 = {
			theme: "dark1",
			title: {
				text: this.props.countryName
			},
			axisY: {
				title: "Number of deaths",
				prefix: "",
				includeZero: false
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#",
				dataPoints: this.state.deaths
			}]
		};
		const optionsChart3 = {
			theme: "dark1",
			title: {
				text: this.props.countryName
			},
			axisY: {
				title: "Number of recovered",
				prefix: "",
				includeZero: false
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#",
				dataPoints: this.state.recovered
			}]
		};
		return (
			<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist" onLoad={this.onClickHandler}>
					<li className="nav-item">
				    	<a style={{color: '#00bfff'}} className="nav-link active" id="cases-tab" data-toggle="tab" href="#cases" role="tab" aria-controls="cases" aria-selected="true">Cases</a>
					</li>
					<li className="nav-item">
				    	<a style={{color: '#00bfff'}} className="nav-link" id="deaths-tab" data-toggle="tab" href="#deaths" role="tab" aria-controls="deaths" aria-selected="false">Deaths</a>
				  	</li>
				 	<li className="nav-item">
				    	<a style={{color: '#00bfff'}} className="nav-link" id="recovered-tab" data-toggle="tab" href="#recovered" role="tab" aria-controls="recovered" aria-selected="false">Recovered</a>
				  	</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="cases" role="tabpanel" aria-labelledby="cases-tab">
				  		<CanvasJSChart options = {optionsChart1} onRef={ref => this.setState({chart1: ref}, this.callback) } />
				 	</div>
				 	<div className="tab-pane fade" id="deaths" role="tabpanel" aria-labelledby="deaths-tab">
				   		<CanvasJSChart options = {optionsChart2} onRef={ref => this.setState({chart2: ref}) }  />
				  	</div>
				  	<div className="tab-pane fade" id="recovered" role="tabpanel" aria-labelledby="recovered-tab">
				   		<CanvasJSChart options = {optionsChart3} onRef={ref => this.setState({chart3: ref}) }  />
				  	</div>
				</div>
			</div>
		);
	}
	callback = () =>{
		const chart1 = this.state.chart1;
		const chart2 = this.state.chart2;
		const chart3 = this.state.chart3;
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  	let target = $(e.target).attr("href");
		  	switch(target){
		  		case "#cases":
		  			chart1.render();
		  		break;
		  		case "#deaths":
		  			chart2.render();
		  		break;
		  		case "#recovered":
		  			chart3.render();
		  		break;
		  		default:
		  			chart1.render();
		  			chart2.render();
		  			chart3.render();
		  		break;
		  	}
		});	
	}
}
export default Chart;