import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'
import { connect } from 'react-redux';
import { MOUSE_ENTER_COMPETITOR_CARD, MOUSE_LEAVE_COMPETITOR_CARD, CHANGE_NAME } from '../../actionTypes';

class CompetitorCard extends Component {
	constructor(props) {
		super(props);

		this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
		this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
		this.handleOnNameChange = this.handleOnNameChange.bind(this);
	}

	handleOnMouseEnter() {
		this.props.mouseEnterCompetitorCard(this.props.playerId);
	}

	handleOnMouseLeave() {
		this.props.mouseLeaveCompetitorCard(this.props.playerId);
	}

	handleOnNameChange(e) {
		const name = e.target.value;
		this.props.changeName(name, this.props.playerId);
	}

	render() {
		return(
			<div className="row" 
				onMouseEnter={this.handleOnMouseEnter}
				onMouseLeave={this.handleOnMouseLeave}
				style={{
				margin: 0,
			}}>
				<CompetitorName playerName={this.props.playerName} 
					backgroundColor={this.props.backgroundColor} 
					handleOnNameChange={this.handleOnNameChange} />
				<CompetitorScore 
					playerId={this.props.playerId}
					matchId={this.props.matchId} />
			</div>
		)
	}
}

const changeName = (name, id) => ({
	type: CHANGE_NAME,
	name,
	id
})

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
	mouseLeaveCompetitorCard,
	changeName,
})

function mapStateToProps(state, props) {
	const playerName = props.playerId === '' ? '' : state.players[props.playerId].name;
	const backgroundColor = props.playerId !== '' && props.playerId === state.hover ? '#c0392b' : '';
	return { playerName, backgroundColor }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitorCard);