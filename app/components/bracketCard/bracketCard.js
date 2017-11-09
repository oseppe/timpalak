import React, { Component } from 'react'
import MatchCard from '../matchCard/matchCard'

class BracketCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstMatch: [this.props.bracketCompetitors[0], this.props.bracketCompetitors[1]],
			secondMatch: [this.props.bracketCompetitors[2], this.props.bracketCompetitors[3]],
			firstMatchNumber: this.props.bracketCompetitors[0].matchNumber,
			secondMatchNumber: this.props.bracketCompetitors[2].matchNumber,
		}
	}
	render() {
		return(
			<div  style={{}}>
				<div style={{}}>
					<MatchCard matchCompetitors={this.state.firstMatch} matchNumber={this.state.firstMatchNumber} />
					<MatchCard matchCompetitors={this.state.secondMatch} matchNumber={this.state.secondMatchNumber} />
				</div>
			</div>
		)
	}
}

export default BracketCard;