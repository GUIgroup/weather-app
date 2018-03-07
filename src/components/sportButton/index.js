// import preact
import { h, render, Component } from 'preact';

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {sport: '', location: ''};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*handleChange(event) {
  	if (event.target.id=="location"){
  		console.log("Lcation picked");
    	this.setState({location: event.target.value});
    }
    else if (event.target.id=="sport"){
    	this.setState({sport: event.target.value});
    }
  }

  handleSubmit(event) {
    alert('sport: ' + this.state.sport + ' location: ' + this.state.location);
    event.preventDefault();
  }*/

	// rendering a function when the button is clicked
	render({clickFunction}, {submitFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<form onSubmit={clickFunction}>
					<label>
						Location <input type="text"  id ="location" value={this.state.location} onChange={clickFunction}/>
					</label>
					<input type="button" value="Sailing" id ="sport" onClick={clickFunction}/>
					<input type="button" value="Surfing" id ="sport" onClick={clickFunction}/>
					<input type="button" value="Swimming" id ="sport" onClick={clickFunction}/>
					<input type="button" value="diving" id ="sport" onClick={clickFunction}/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}
