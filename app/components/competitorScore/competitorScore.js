import React, { Component } from 'react'

class CompetitorScore extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			match: this.props.match,
			score: this.props.score,
			inputDisplay: 'none',
			textDisplay: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleMouseClick = this.handleMouseClick.bind(this);
	}

	handleChange(e) {
		const score = e.target.value;
    this.setState({ score });

    if (isNaN(+score)) return;
    this.props.onCompetitorCardChangeScore(score, this.props.id, this.props.match);
  }

  handleKeyPress(e) {
  	if (e.key === 'Enter') {
			this.setState({ inputDisplay: 'none', textDisplay: '' });
  	}
  }

  handleMouseClick() {
		this.setState({ inputDisplay: '', textDisplay: 'none' });
	}

	render() {
		return(
			<div className="col s3" style={{
				backgroundColor: "#d35400", 
				padding: "5px",
				textAlign: "center"
			}}>
				<div onClick={ this.handleMouseClick } 
					style={{
					display: `${this.state.textDisplay}`
				}}>
					{this.state.score}
				</div>
				<div style={{
					display: `${this.state.inputDisplay}`,
				}}> 
					<input type='text'
					ref='textInput'
					value={this.state.score} 
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress} 
					style={{
						height: 'inherit',
						margin: 0,
					}}/>
				</div>
			</div>
		)
	}
}

export default CompetitorScore;

