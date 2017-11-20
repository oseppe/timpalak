import React, { Component } from 'react'

class CompetitorScore extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	id: this.props.id,
		// 	matchNumber: this.props.matchNumber,
		// 	backgroundColor: this.getBackgroundColor(this.props.isWinner),
		// 	score: this.props.score,
		// 	inputDisplay: 'none',
		// 	textDisplay: '',
		// };

		// this.handleChange = this.handleChange.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this);
		// this.handleMouseClick = this.handleMouseClick.bind(this);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.score !== this.props.score) {
	// 		this.setState({ score: nextProps.score, });
	// 	};

	// 	if (nextProps.id !== this.props.id) {
	// 		this.setState({ id: nextProps.id });
	// 	};

	// 	if (nextProps.isWinner !== this.props.isWinner) {
	// 		this.setState({
	// 			backgroundColor: this.getBackgroundColor(nextProps.isWinner),
	// 		});
	// 	}

	// }

	// handleChange(e) {
	// 	const score = e.target.value;
 //    this.setState({ score });

 //    if (score.trim() === '' || isNaN(score)) return;
    
 //    this.props.onCompetitorCardChangeScore(score, this.props.id, this.props.matchNumber);

 //  }

 //  getBackgroundColor(isWinner) {
 //  	return isWinner ? "#d35400" : "#46637f";
 //  }

 //  handleKeyPress(e) {
 //  	if (e.key === 'Enter') {
	// 		this.setState({ inputDisplay: 'none', textDisplay: '' });
 //  	}
 //  }

 //  handleMouseClick() {
 //  	if(this.state.id.trim() === '') return;
	// 	this.setState({ inputDisplay: '', textDisplay: 'none' });
	// }

	render() {
		return(
			<div className="col s3" style={{
				padding: "5px",
				textAlign: "center",
			}}>
				<div 
					style={{
					height: 'inherit',
				}}>
					{this.props.score}
				</div>
				
			</div>
		)
	}
}

// backgroundColor: `${this.state.backgroundColor}`, 

// onClick={ this.handleMouseClick } 
// display: `${this.state.textDisplay}`,

// <div style={{ display: `${this.state.inputDisplay}`, }}> 
					// <input type='text'
					// ref='textInput'
					// value={this.state.score} 
					// onChange={this.handleChange}
					// onKeyPress={this.handleKeyPress} 
					// style={{
						// height: 'inherit',
						// margin: 0,
					// }}/>
				// </div>

export default CompetitorScore;

