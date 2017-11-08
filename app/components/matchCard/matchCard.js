import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'

class MatchCard extends Component {
	render() {
		return(
			<div className="row" style={{
				borderRadius: "10px",
				backgroundColor: "#34495e",
				width: "175px",
				marginBottom: 0
			}}>
				<CompetitorCard name="Soraka" score="12" />
				<CompetitorCard name="Nami" score="5" />
			</div>
		)
	}
}

export default MatchCard;