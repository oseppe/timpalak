import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'

class CompetitorCard extends Component {
	constructor(props) {
		super(props);

		this.state = { backgroundColor: '' };

		this.handleOnHover = this.handleOnHover.bind(this);
		this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
	}

	componentWillReceiveProps() {
		const backgroundColor = this.props.competitor.hover ? 'red' : '';
		this.setState({ backgroundColor });
	}

	handleOnHover() {
		this.props.onCompetitorCardHover(this.props.competitor.id);
	}

	handleOnMouseLeave() {
		this.props.onCompetitorMouseLeave(this.props.competitor.name);
	}

	render() {
		return(
			<div className="row" 
				onMouseOver={this.handleOnHover} 
				onMouseLeave={this.handleOnMouseLeave}
				style={{
				margin: 0,
			}}>
				<CompetitorName name={this.props.competitor.name}
					id={this.props.competitor.id}
					backgroundColor={this.state.backgroundColor}
					onCompetitorCardChangeName={this.props.onCompetitorCardChangeName} />
				<CompetitorScore score={this.props.competitor.score}
					id={this.props.competitor.id}
					match={this.props.competitor.match} 
					backgroundColor={this.state.backgroundColor}
					onCompetitorCardChangeScore={this.props.onCompetitorCardChangeScore} />
			</div>
		)
	}
}

export default CompetitorCard;