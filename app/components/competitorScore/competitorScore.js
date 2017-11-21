import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CHANGE_SCORE } from '../../actionTypes';

class CompetitorScore extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const score = e.target.value;

    this.props.changeScore(score, this.props.playerId, this.props.matchId);
  }

	render() {
		return(
			<div className="col s3" style={{
				padding: "5px",
				textAlign: "center",
				backgroundColor: `${this.props.backgroundColor}`,
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
	const filteredPlayers = state.matches[props.matchId].players.filter((elem) => { return elem.id === props.playerId });

	const score = filteredPlayers.length === 0 ? 'x' : filteredPlayers[0].score;

	const matchWinnerId = state.matches[props.matchId].winner;

	const backgroundColor = matchWinnerId !== '' && matchWinnerId === filteredPlayers[0].id ? 
		'#d35400' :
		'#46637f';

	return { score, backgroundColor }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CompetitorScore);