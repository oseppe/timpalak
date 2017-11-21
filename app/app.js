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
		this.onMatchFight = this.onMatchFight.bind(this);
		this.handleRestart = this.handleRestart.bind(this);
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

	onMatchFight(matchNumber, competitorAId, competitorBId) {
		console.log(`match: ${matchNumber}`);
		const oldCompetitionData = this.state.competitionData;

		const competitorA = oldCompetitionData.find((competitor) => {
			return competitor.matchNumber === matchNumber && competitor.id === competitorAId;
		});

		const competitorB = oldCompetitionData.find((competitor) => {
			return competitor.matchNumber === matchNumber && competitor.id === competitorBId;
		});

		const winner = competitorA.score > competitorB.score ? competitorA : competitorB;
		
		const victor = copyCompetitorData(winner);
		victor.isMatchFought = false;
		victor.level = winner.level + 1;
		victor.matchNumber = nextMatchNumber(winner.matchNumber);
		victor.matchCompetitorNumber = nextMatchCompetitorNumber(winner.matchNumber);
		victor.score = 'x';

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.matchNumber === matchNumber 
				&& (item.id === competitorAId || item.id === competitorBId)) {
				item.isMatchFought = true;
			}

			if (item.matchNumber === victor.matchNumber && item.matchCompetitorNumber === victor.matchCompetitorNumber) {
				item = victor;
			}

			if (item.id === winner.id && item.matchNumber === winner.matchNumber) {
				item.isWinner = true;
			}

			// TODO: investigate why not returning item here seems 
			// to insert two undefined in competition data
			return item;
		});

		console.log(competitionData);

		this.setState({ competitionData });
	}

	handleRestart() {
		const competitors = generateCompetitors();

		const competitionData = buildCompetitionData(competitors);

		this.setState({ competitors, competitionData });
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