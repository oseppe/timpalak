import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { buildCompetitionData, copyCompetitorData, nextMatchNumber, nextMatchCompetitorNumber } from './utility/utility'


class App extends Component {
	constructor() {
		super();

		const competitors = [
			'Alistar', 'Blitzcrank', 'Janna', 'Karma', 'Leona', 'Lulu', 'Morgana', 'Nami', 
			'Nautilus', 'Rakan', 'Sona', 'Soraka', 'Taric', 'Thresh',  'Zilean', 'Zyra'
		];

		const competitionData = buildCompetitionData(competitors);
		
		this.state = {
			competitionData,
			competitors,
		};

		this.onCompetitorCardChangeName = this.onCompetitorCardChangeName.bind(this);
		this.onCompetitorCardChangeScore = this.onCompetitorCardChangeScore.bind(this);
		this.onCompetitorCardHover = this.onCompetitorCardHover.bind(this);
		this.onCompetitorCardMouseLeave = this.onCompetitorCardMouseLeave.bind(this);
		this.onMatchFight = this.onMatchFight.bind(this);
	}

	onCompetitorCardChangeName(competitorName, id) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.id !== '' && item.id === id) {
				item.name = competitorName;
			}
			
			return item;
		});

		this.setState({competitionData});
	}

	onCompetitorCardChangeScore(score, id, matchNumber) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.id === '') return item;
			if (item.matchNumber !== matchNumber) return item;
			if (item.id === id) item.score = score;
			
			item.isMatchFought = false;

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
			return competitor.id === competitorAId;
		});

		const competitorB = oldCompetitionData.find((competitor) => {
			return competitor.id === competitorBId;
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

			// TODO: investigate why not returning item here seems 
			// to insert two undefined in competition data
			return item;
		});

		console.log(competitionData);

		this.setState({ competitionData });
	}

	render() {
		const competitorsCount = this.state.competitors.length;

		const levelsCount = Math.log2(competitorsCount);

		const levels = [];
		let competitorCountInLevel = competitorsCount;
		let startSlice = 0;
		let endSlice = competitorCountInLevel;

		for (let i = 0; i < levelsCount; i++) {
			const levelCompetitionData = this.state.competitionData.slice(startSlice, endSlice);

			levels.push(<LevelCard key={i}
				competitionData={levelCompetitionData} 
				onCompetitorCardHover={this.onCompetitorCardHover}
				onCompetitorMouseLeave={this.onCompetitorCardMouseLeave}
				onCompetitorCardChangeName={this.onCompetitorCardChangeName} 
				onCompetitorCardChangeScore={this.onCompetitorCardChangeScore}
				onMatchFight={this.onMatchFight} />);

			competitorCountInLevel = competitorCountInLevel / 2;
			startSlice = endSlice;
			endSlice = endSlice + competitorCountInLevel;
		}

		return(
			<div className="row">
				{ levels }
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)