// import preact
import { h, render, Component } from 'preact';

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {sport: '', location: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	if (event.target.id=="location"){
  		console.log("LOcation picked");
    	this.setState({location: event.target.value});
    }
    else if (event.target.id=="sport"){
    	this.setState({sport: event.target.value});
    }
  }

  handleSubmit(event) {
    alert('sport: ' + this.state.sport + ' location: ' + this.state.location);
    event.preventDefault();
  }

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Location <input type="text"  id ="location" value={this.state.location} onChange={this.handleChange} />
					</label>
					<input type="button" value="Sailing" id ="sport" onClick={this.handleChange}/>
					<input type="button" value="Surfing" id ="sport" onClick={this.handleChange}/>
					<input type="button" value="Swimming" id ="sport" onClick={this.handleChange}/>
					<input type="button" value="diving" id ="sport" onClick={this.handleChange}/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}
