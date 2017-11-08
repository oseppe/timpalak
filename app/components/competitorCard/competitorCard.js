import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'

class CompetitorCard extends Component {
	render() {
		return(
			<div className="row" style={{
				margin: 0
			}}>
				<CompetitorName name={this.props.name} />
				<CompetitorScore score={this.props.score} />
			</div>
		)
	}
}

export default CompetitorCard;