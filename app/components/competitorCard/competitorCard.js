import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'
import { connect } from 'react-redux';
import { MOUSE_ENTER_COMPETITOR_CARD, MOUSE_LEAVE_COMPETITOR_CARD } from '../../actionTypes';

class CompetitorCard extends Component {
	constructor(props) {
		super(props);

		this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
		this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
	}

	handleOnMouseEnter() {
		this.props.mouseEnterCompetitorCard(this.props.playerId);
	}

	handleOnMouseLeave() {
		this.props.mouseLeaveCompetitorCard(this.props.playerId);
	}

	render() {
		return(
			<div className="row" 
				onMouseEnter={this.handleOnMouseEnter}
				onMouseLeave={this.handleOnMouseLeave}
				style={{
				margin: 0,
			}}>
				<CompetitorName playerId={this.props.playerId} />
				<CompetitorScore 
					playerId={this.props.playerId}
					matchId={this.props.matchId} />
			</div>
		)
	}
}

// isWinner={this.props.competitor.isWinner} 

const mouseEnterCompetitorCard = (playerId) => ({
	type: MOUSE_ENTER_COMPETITOR_CARD,
	playerId
})

const mouseLeaveCompetitorCard = (playerId) => ({
	type: MOUSE_LEAVE_COMPETITOR_CARD,
	playerId
})

const mapDispatchToProps = ({
	mouseEnterCompetitorCard,
	mouseLeaveCompetitorCard
})

export default connect(null, mapDispatchToProps)(CompetitorCard);