import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'

class MatchCard extends Component {
	render() {
		return(
			<div className="row" style={{
				width: "200px",
			}}>
				<div className="col s1" style={{
					margin: 0,
					padding: 0,
				}}>
					1
				</div>
				<div className="col s11" style={{
					backgroundColor: "#34495e",
					borderRadius: "10px",
					padding: 0,
				}}>
					<CompetitorCard name="Soraka" score="12" />
					<CompetitorCard name="Nami" score="5" />
				</div>
			</div>
		)
	}
}

export default MatchCard;