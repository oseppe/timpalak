import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'
import { connect } from 'react-redux';
import { START_MATCH } from '../../actionTypes';

class MatchCard extends Component {
	constructor(props) {
		super(props);

		this.handleMatchFight = this.handleMatchFight.bind(this);
	}

	handleMatchFight() {
		this.props.startMatch(this.props.matchId);
	}

	componentDidUpdate(prevProps) {
		this.props.matchId === 9 && console.log(prevProps);
	}

	render() {
		
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
					<CompetitorCard playerId={ this.props.match.players[0].id }
						matchId = { this.props.matchId } />
					<CompetitorCard playerId={ this.props.match.players[1].id }
						matchId = { this.props.matchId } />
				</div>
				<div>
					<button className="btn waves-effect waves-light col s10"
						onClick={this.handleMatchFight}
						style={{
							visibility: `${this.props.visibilityBtnMatch}`,
					}}>
						Fight
  				</button>
				</div>
			</div>
		)
	}
}

const startMatch = (matchId) => ({
	type: START_MATCH,
	matchId
})

const mapDispatchToProps = ({
	startMatch
})

function mapStateToProps(state, props) {
	const match = state.matches[props.matchId];
	const matchNumber = +props.matchId + 1;

	let matchReady = true;

	match.players.map((elem) => {
		matchReady = matchReady && elem.score.trim() !== '' && !isNaN(elem.score)
	});

	const visibilityBtnMatch = !match.isMatchFought && matchReady ? '' : 'hidden';

	const playerAId = match.players[0].id;
	const playerBId = match.players[1].id;

	return { match, matchNumber, visibilityBtnMatch, playerAId, playerBId }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchCard);