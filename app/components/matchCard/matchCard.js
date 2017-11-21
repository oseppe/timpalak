import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'
import { connect } from 'react-redux';

class MatchCard extends Component {
	// constructor(props) {
	// 	super(props);

	// 	let matchReady = this.isMatchReady(this.props.matchCompetitors[0].score, this.props.matchCompetitors[1].score);

	// 	const visibilityBtnMatch = matchReady ? '' : 'hidden';

	// 	this.state = { visibilityBtnMatch };

	// 	this.handleMatchFight = this.handleMatchFight.bind(this);
	// }

	// componentWillReceiveProps(nextProps) {
	// 	const matchReady = this.isMatchReady(nextProps.matchCompetitors[0].score, nextProps.matchCompetitors[1].score);

	// 	const visibilityBtnMatch = matchReady && !nextProps.matchCompetitors[0].isMatchFought  ? '' : 'hidden';

	// 	this.setState({ visibilityBtnMatch });
	// }

	// handleMatchFight() {
	// 	const matchNumber = this.props.matchNumber;
	// 	const competitorAId = this.props.matchCompetitors[0].id;
	// 	const competitorBId = this.props.matchCompetitors[1].id;
	// 	this.props.onMatchFight(matchNumber, competitorAId, competitorBId);

	// 	this.setState({ visibilityBtnMatch: 'hidden' });
	// }

	// isMatchReady(scoreA, scoreB) {
	// 	return scoreA.trim() !== '' && scoreB !== '' && !isNaN(scoreA) && !isNaN(scoreB)
	// }

	render() {
		// console.log('Match Card');
		// console.log(this.props.match);
		return(
			<div className="row" style={{
				width: "150px",
			}}>
				<div className="col s2" style={{
					margin: 0,
					padding: 0,
				}}>
					{ this.props.matchNumber }
				</div>
				<div className="col s10" style={{
					backgroundColor: "#34495e",
					borderRadius: "10px",
					padding: 0,
					minHeight: 60,
					marginBottom: '3px',
				}}>
					<CompetitorCard playerId={ this.props.match.playerA }
						playerScore={ this.props.match.scoreA }
						matchId = { this.props.matchId } />
					<CompetitorCard playerId={ this.props.match.playerB }
						playerScore={ this.props.match.scoreB } />
				</div>
				<div>
					<button className="btn waves-effect waves-light col s10">
						Fight
  				</button>
				</div>
			</div>
		)
	}
}

// style={{
// 	visibility: `${this.state.visibilityBtnMatch}`,
// }}
// onClick={this.handleMatchFight}

function mapStateToProps(state, props) {
	const match = state.matches[props.matchId];
	const matchNumber = +props.matchId + 1;

	return { match, matchNumber }
}

export default connect(mapStateToProps)(MatchCard);