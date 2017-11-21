import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'
import { connect } from 'react-redux';

class CompetitorCard extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = { backgroundColor: '' };

	// 	this.handleOnHover = this.handleOnHover.bind(this);
	// 	this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
	// }

	// componentWillReceiveProps() {
	// 	const backgroundColor = this.props.competitor.hover ? 'red' : '';
	// 	this.setState({ backgroundColor });
	// }

	// handleOnHover() {
	// 	this.props.onCompetitorCardHover(this.props.competitor.id);
	// }

	// handleOnMouseLeave() {
	// 	this.props.onCompetitorMouseLeave(this.props.competitor.name);
	// }

	render() {
		return(
			<div className="row" 
				style={{
				margin: 0,
			}}>
				<CompetitorName playerId={this.props.playerId} />
				<CompetitorScore score={this.props.score}
					id={this.props.playerId}
					matchId={this.props.matchId} />
			</div>
		)
	}
}

// onMouseOver={this.handleOnHover} 
// onMouseLeave={this.handleOnMouseLeave}

// backgroundColor={this.state.backgroundColor}
// onCompetitorCardChangeName={this.props.onCompetitorCardChangeName}

// isWinner={this.props.competitor.isWinner} 
// backgroundColor={this.state.backgroundColor}
// onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} 

function mapStateToProps(state, props) {

	const player = props.playerId === '' ? { name: ''} : state.players[props.playerId];
	// console.log('competitorCard');
	// console.log('state');
	// console.log(state);
	// console.log('props');
	// console.log(props);
	// console.log('--------');
	return { player }
}

export default connect(mapStateToProps)(CompetitorCard);