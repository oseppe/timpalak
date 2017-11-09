import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'

class MatchCard extends Component {
	render() {
		return(
			<div className="row" style={{
				width: "150px",
			}}>
				<div className="col s1" style={{
					margin: 0,
					padding: 0,
				}}>
					{this.props.matchNumber}
				</div>
				<div className="col s11" style={{
					backgroundColor: "#34495e",
					borderRadius: "10px",
					padding: 0,
				}}>
					<CompetitorCard name={this.props.matchCompetitors[0].name} score={this.props.matchCompetitors[0].score} />
					<CompetitorCard name={this.props.matchCompetitors[1].name} score={this.props.matchCompetitors[1].score} />
				</div>
			</div>
		)
	}
}

export default MatchCard;