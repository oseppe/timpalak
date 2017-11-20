import React, { Component } from 'react'
import MatchCard from '../matchCard/matchCard'

class BracketCard extends Component {
	render() {
		const matchIds = this.props.matchIds;
		const matchesCount = matchIds.length;
		const matches = [];

		for (let i = 0; i < matchesCount; i++) {
			const matchId = matchIds[i];
			matches.push(<MatchCard key={matchId}
				matchId={matchId} />)
		}

		return(
			<div  style={{}}>
				<div style={{}}>
					{matches}
				</div>
			</div>
		)
	}
}

export default BracketCard;