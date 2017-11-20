import React, { Component } from 'react'

class CompetitorName extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	name: this.props.name,
		// 	inputDisplay: 'none',
		// 	textDisplay: ''
		// }

		// this.handleChange = this.handleChange.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this);
		// this.handleMouseClick = this.handleMouseClick.bind(this);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.name === this.props.name) return;

	// 	const name = nextProps.name;
	// 	this.setState({ name });
	// }

	// handleChange(e) {
	// 	const name = e.target.value;
	// 	this.props.onCompetitorCardChangeName(name, this.props.id);
 //    this.setState({ name });
 //  }

 //  handleKeyPress(e) {
 //  	if (e.key === 'Enter') {
	// 		this.setState({ inputDisplay: 'none', textDisplay: '' });  		
 //  	}
 //  }

	// handleMouseClick() {
	// 	this.setState({ inputDisplay: '', textDisplay: 'none' });
	// }

	render() {
		return(
			<div className="col s9" style={{
				color: "#ffffff",
				padding: "5px"
			}}>
				<div >
					{this.props.name}
				</div>
				
			</div>
		)
	}
}

// backgroundColor: `${this.props.backgroundColor}`,

// onClick={ this.handleMouseClick } 
// 					style={{
// 					display: `${this.state.textDisplay}`
// 				}}

//<div onClick={ this.handleMouseClick } style={{
//	display: `${this.state.inputDisplay}`,
//}}>
//	<input type='text'
//	ref='textInput'
//	value={this.state.name} 
//	onChange={this.handleChange}
//	onKeyPress={this.handleKeyPress} 
//	style={{
//		height: 'inherit',
//		margin: 0,
//	}}/>
//</div>

export default CompetitorName;

