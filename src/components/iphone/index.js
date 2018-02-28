// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/15eddedeb44db5f7/conditions/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	//set sport to name
	setSport = (name) => {
		this.setState({ sport: name });
	}
	// the main render method for the iphone component
	render() {
		// display all weather data
		return (
			<div class={ style.container }>
			<div class = { style.topbar }> our logo</div>
			//if not set to display, display none of this
			{ !this.state.display ?
			<div class={ style.mainwindow }>
				<div class={ style.widgetsm }>
					<div>{ this.state.locate }</div>
					<div>{ this.state.cond }</div>
					<span>{ this.state.temp }</span>
				</div>
				<div class ={style.widgetsm}>
					Today the wind speed is {this.state.windSpeed} kph, blowing towards the {this.state.windDirection}
				</div> : null}
			//only display this bit if you need to
				{ this.state.display ?
				<div class= { style_iphone.container }>
					<sportButton class={ style_iphone.button } clickFunction={ this.setSport("sail") } name="sail"/ >
				 	<Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData }/ >
				</div>: null }
			</div>);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});
	}
}
