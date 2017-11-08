import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'

class CompetitorCard extends Component {
	render() {
		return(
			<div className="row">
				<CompetitorName name="Joseph" />
				<CompetitorScore score="12" />
			</div>
		)
	}
}

export default CompetitorCard;