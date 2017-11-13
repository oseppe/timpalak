import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'

class MatchCard extends Component {
	render() {
		return(
			<div className="row" style={{
				width: "150px",
			}}>
				<div className="col s2" style={{
					margin: 0,
					padding: 0,
				}}>
					{this.props.matchNumber}
				</div>
				<div className="col s10" style={{
					backgroundColor: "#34495e",
					borderRadius: "10px",
					padding: 0,
				}}>
					<CompetitorCard competitor={ this.props.matchCompetitors[0] }
						onCompetitorCardChangeName={this.props.onCompetitorCardChangeName} 
						onCompetitorCardHover={ this.props.onCompetitorCardHover }
						onCompetitorMouseLeave={this.props.onCompetitorMouseLeave}
						onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} />
					<CompetitorCard competitor={ this.props.matchCompetitors[1] }
						onCompetitorCardChangeName={this.props.onCompetitorCardChangeName} 
						onCompetitorCardHover={ this.props.onCompetitorCardHover }
						onCompetitorMouseLeave={this.props.onCompetitorMouseLeave}
						onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} />
				</div>
			</div>
		)
	}
}

export default MatchCard;