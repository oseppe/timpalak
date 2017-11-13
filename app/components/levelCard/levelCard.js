import React, { Component } from 'react'
import BracketCard from '../bracketCard/bracketCard'
import MatchCard from '../matchCard/matchCard'

// Handles 2 ** n competitors only
class LevelCard extends Component {
	constructor(props) {
		super(props);

		this.state = { level: [] };
	}

	render() {
		const competitionDataCount = this.props.competitionData.length;

		// if % 4 build brackets only
		if (competitionDataCount % 4 === 0) {
			let sliceStart = 0;
			let sliceEnd = 4;

			const bracketCount = competitionDataCount / 4;
			const brackets = [];

			for (let i = 0; i < bracketCount; i++) {
				let bracketCompetitors = this.props.competitionData.slice(sliceStart, sliceEnd);

				brackets.push(<BracketCard bracketCompetitors={bracketCompetitors} 
					onCompetitorCardChangeName={this.props.onCompetitorCardChangeName}
					onCompetitorCardHover={this.props.onCompetitorCardHover} 
					onCompetitorMouseLeave={this.props.onCompetitorMouseLeave} 
					onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} />)

				sliceStart = sliceEnd;
				sliceEnd = sliceEnd + 4;
			}

			this.state.level = brackets;
		}
		// handle final matchcard
		else if (competitionDataCount / 2 === 1) {
			this.state.level = <MatchCard matchCompetitors={this.props.competitionData} 
				matchNumber={this.props.competitionData[0].matchNumber}
				onCompetitorCardChangeName={this.props.onCompetitorCardChangeName}
				onCompetitorCardHover={this.props.onCompetitorCardHover}
				onCompetitorMouseLeave={this.props.onCompetitorMouseLeave}
				onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} />
		}

		return(
			<div className="col m3 l2">
				{ this.state.level }
			</div>
		)
	}
}

export default LevelCard;