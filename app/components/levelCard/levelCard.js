import React, { Component } from 'react'
import BracketCard from '../bracketCard/bracketCard'
import MatchCard from '../matchCard/matchCard'

// Handles 2 ** n competitors only
class LevelCard extends Component {
	render() {
		const matchIds = this.props.matchIds;
		const countMatchIds = matchIds.length;
		const level = [];

		if (countMatchIds === 1) {
			level.push(<MatchCard key={0} matchId={matchIds[0]} />)
		}

		else {
			let sliceStart = 0;
			let sliceEnd = 2;

			const countBrackets = countMatchIds / 2;
			
			for (let i = 0; i < countBrackets; i++) {
				let bracketMatchIds = matchIds.slice(sliceStart, sliceEnd);
				
				level.push(<BracketCard key={i} 
					matchIds={bracketMatchIds} />)

				sliceStart = sliceEnd;
				sliceEnd = sliceEnd + 2;
			}
		}

		return(
			<div className="col m3 l2">
				{ level }
			</div>
		)
	}
}

export default LevelCard;