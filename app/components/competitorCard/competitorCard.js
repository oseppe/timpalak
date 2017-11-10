import React, { Component } from 'react'
import CompetitorName from '../competitorName/competitorName'
import CompetitorScore from '../competitorScore/competitorScore'

class CompetitorCard extends Component {
	constructor(props) {
		super(props);

		this.state = { backgroundColor: '' };

		this.handleOnHover = this.handleOnHover.bind(this);
	}

	handleOnHover() {
		this.props.onCompetitorCardHover(this.props.competitor.name);

		const backgroundColor = this.props.shouldHighlight ? 'red' : '';

		this.setState({backgroundColor});
	}

	render() {
		return(
			<div className="row" onMouseOver={this.handleOnHover} style={{
				margin: 0,
			}}>
				<CompetitorName name={this.props.competitor.name} shouldHighlight={this.props.competitor.hover} backgroundColor={this.state.backgroundColor} />
				<CompetitorScore score={this.props.competitor.score} shouldHighlight={this.props.competitor.hover} backgroundColor={this.state.backgroundColor} />
			</div>
		)
	}
}

export default CompetitorCard;