import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'

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
				<CompetitorScore 
					playerId={this.props.playerId}
					matchId={this.props.matchId} />
			</div>
		)
	}
}

// onMouseOver={this.handleOnHover} 
// onMouseLeave={this.handleOnMouseLeave}

// backgroundColor={this.state.backgroundColor}

// isWinner={this.props.competitor.isWinner} 
// backgroundColor={this.state.backgroundColor}
// onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} 

export default CompetitorCard;