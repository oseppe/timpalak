import React, { Component } from 'react'
import MatchCard from '../matchCard/matchCard'

class BracketCard extends Component {
	render() {
		return(
			<div  style={{}}>
				<div style={{}}>
					<MatchCard matchCompetitors={[this.props.bracketCompetitors[0], this.props.bracketCompetitors[1]]} 
							matchNumber={this.props.bracketCompetitors[0].matchNumber}
							onCompetitorCardChangeName={this.props.onCompetitorCardChangeName}
							onCompetitorCardHover={this.props.onCompetitorCardHover}
							onCompetitorMouseLeave={this.props.onCompetitorMouseLeave}
							onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore}
							onMatchFight={this.props.onMatchFight} />
					<MatchCard matchCompetitors={[this.props.bracketCompetitors[2], this.props.bracketCompetitors[3]]} 
							matchNumber={this.props.bracketCompetitors[2].matchNumber}
							onCompetitorCardChangeName={this.props.onCompetitorCardChangeName}
							onCompetitorCardHover={this.props.onCompetitorCardHover}
							onCompetitorMouseLeave={this.props.onCompetitorMouseLeave}
							onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore}
							onMatchFight={this.props.onMatchFight} />
				</div>
			</div>
		)
	}
}

export default BracketCard;