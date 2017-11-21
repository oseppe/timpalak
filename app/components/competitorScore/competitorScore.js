import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CHANGE_SCORE } from '../../actionTypes';

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

		this.handleChange = this.handleChange.bind(this);
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

	handleChange(e) {
		const score = e.target.value;

    this.props.changeScore(score, this.props.playerId, this.props.matchId);
  }

 //  getBackgroundColor(isWinner) {
 //  	return isWinner ? "#d35400" : "#46637f";
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
				backgroundColor: "#46637f",
			}}>
				<div 
					style={{
					height: 'inherit',
				}}>
					<input type='text'
						value={this.props.score}
						onChange={this.handleChange}
						style={{
							height: 'inherit',
							margin: 0,
							borderBottom: 'none',
							textAlign: 'center',
						}}/>
				</div>
				
			</div>
		)
	}
}

// backgroundColor: `${this.state.backgroundColor}`, 

// onClick={ this.handleMouseClick } 
// display: `${this.state.textDisplay}`,

const changeScore = (score, id, matchId) => ({
	type: CHANGE_SCORE,
	score,
	id,
	matchId
})

const mapDispatchToProps = ({
	changeScore
})

function mapStateToProps(state, props) {
	const players = state.matches[props.matchId].players.filter((elem) => { return elem.id === props.playerId });

	const score = players.length === 0 ? 'x' : players[0].score;

	return { score }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CompetitorScore);

