import React, { Component } from 'react'
import CompetitorCard from '../competitorCard/competitorCard'

class MatchCard extends Component {
	constructor(props) {
		super(props);

		let matchReady = this.isMatchReady(this.props.matchCompetitors[0].score, this.props.matchCompetitors[1].score);

		const visibilityBtnMatch = matchReady ? '' : 'hidden';

		this.state = { visibilityBtnMatch };
	}

	componentWillReceiveProps(nextProps) {
		let matchReady = this.isMatchReady(nextProps.matchCompetitors[0].score, nextProps.matchCompetitors[1].score);

		const visibilityBtnMatch = matchReady ? '' : 'hidden';

		this.setState({ visibilityBtnMatch });
	}

	isMatchReady(scoreA, scoreB) {
		return scoreA.trim() !== '' && scoreB !== '' && !isNaN(scoreA) && !isNaN(scoreB)
	}

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
					minHeight: 60,
					marginBottom: '3px',
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
				<div style={{
					visibility: `${this.state.visibilityBtnMatch}`,
				}}>
					<button className="btn waves-effect waves-light col s10">
						Fight
  				</button>
				</div>
			</div>
		)
	}
}

export default MatchCard;