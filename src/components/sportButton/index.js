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
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
				<form onSubmit={clickFunction}>
					<table>
					<tr>
					<th colspan="3">
					<label>
						Location <input type="text"  id ="location" value={this.state.location} onChange={clickFunction}/>
					</label>
					</th>
					</tr>
					<tr>
					<td><input type="button" value="Sail" id ="sport" onClick={clickFunction}/></td>
					<td><input type="button" value="Surf" id ="sport" onClick={clickFunction}/></td>
					<td><input type="button" value="Swim" id ="sport" onClick={clickFunction}/></td>
					</tr>
					<tr>
					<td><input type="button" value="Scuba" id ="sport" onClick={clickFunction}/></td>
					<td><input type="button" value="Row" id ="sport" onClick={clickFunction}/></td>
					<td><input type="button" value="Windsurf" id ="sport" onClick={clickFunction}/></td>
					</tr>
					<tr>
					<td colspan="3"><input type="submit" value="Submit"/></td>
					</tr>
					</table>
				</form>
		);
	}
}
