import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { CHANGE_NAME, MOUSE_HOVER_COMPETITOR_CARD, MOUSE_LEAVE_COMPETITOR_CARD, CHANGE_SCORE, START_MATCH, START_NEW_COMPETITION } from './actionTypes';
import { store } from './store';
import { copyCompetitorData, generateCompetitors, nextMatchNumber, nextMatchCompetitorNumber } from './utility/utility'
import { Provider, connect } from 'react-redux';


class Board extends Component {
	constructor(props) {
		super(props);

		const competitors = this.props.competitors;

		const competitionData = this.props.competitionData;
		
		this.state = {
			competitionData,
			competitors,
		};

		this.onCompetitorCardChangeScore = this.onCompetitorCardChangeScore.bind(this);
		this.onCompetitorCardHover = this.onCompetitorCardHover.bind(this);
		this.onCompetitorCardMouseLeave = this.onCompetitorCardMouseLeave.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const {competitors, competitionData} = this.props;
		this.setState({ competitors, competitionData });
	}

	onCompetitorCardChangeScore(score, id, matchNumber) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.id === '') return item;
			if (item.matchNumber !== matchNumber) return item;
			if (item.id === id) item.score = score;
			
			item.isMatchFought = false;
			item.isWinner = false;

			return item;
		});

		this.setState({ competitionData });
		// console.log(competitionData);
	}

	onCompetitorCardHover(id) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.id !== '' && item.id === id) {
				item.hover = true;
			}
			
			return item;
		});

		this.setState({competitionData});
	}

	onCompetitorCardMouseLeave(competitorName) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.name !== '' && item.name === competitorName) {
				item.hover = false;
			}
			
			return item;
		});

		this.setState({competitionData});
	}

	render() {
		const handleStartNew = this.props.handleStartNew;
		const levelsData = this.props.levels;
		const levels = [];

		const countLevels = Object.keys(levelsData).length;
		
		for (let i = 0; i < countLevels; i++) {
			levels.push(<LevelCard key={i}
				matchIds={levelsData[i]} />)
		}

		return(
			<div>
				<div className="row" style={{
					paddingTop: '10px',
				}}>
					<div className="col s12 m12 l12 center-align">
						<button className="btn waves-effect waves-light" onClick={ handleStartNew }>
							Restart
						</button>
					</div>
				</div>
				<div className="row">
					{ levels }
				</div>
			</div>
		)
	}
}

const startNewCompetition = {type: START_NEW_COMPETITION};

function mapStateToProps(state) {
	return {
		players: state.players,
		matches: state.matches,
		levels: state.levels
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleStartNew: () => dispatch(startNewCompetition)
	}
}

let App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)