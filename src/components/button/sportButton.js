// import preact
import { h, render, Component } from 'preact';

export default class sportButton extends Component {
	// rendering a function when the button is clicked
	render({clickFunction}, name) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		var name = name;
		return (
			<div>
					<button type="button" onClick={clickFunction}>name</button>
			</div>
		);
	}
}
