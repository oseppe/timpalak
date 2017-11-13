import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { buildCompetitionData } from './utility/utility'


class App extends Component {
	constructor() {
		super();

		const competitors = [
			'Alistar', 'Blitzcrank', 'Janna', 'Karma', 'Leona', 'Lulu', 'Morgana', 'Nami', 
			'Nautilus', 'Rakan', 'Sona', 'Soraka', 'Taric', 'Thresh',  'Zilean', 'Zyra'
		];

		const competitionData = buildCompetitionData(competitors);
		
		const indexJanna = competitors.indexOf('Janna');
		const secondLevel = indexJanna + competitors.length - 1;
		competitionData[secondLevel].name = 'Janna';
		const thirdLevel = secondLevel + (competitors.length / 2) - 1;
		competitionData[thirdLevel].name = 'Janna';

		this.state = {
			competitionData,
			competitors,
		};

		this.onCompetitorCardHover = this.onCompetitorCardHover.bind(this);
		this.onCompetitorCardMouseLeave = this.onCompetitorCardMouseLeave.bind(this);
	}

	onCompetitorCardHover(competitorName) {
		const oldCompetitionData = this.state.competitionData;

		const competitionData = oldCompetitionData.map((item, index) => {
			if (item.name !== '' && item.name === competitorName) {
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
		const competitorsCount = this.state.competitors.length;

		const levelsCount = Math.log2(competitorsCount);

		const levels = [];
		let competitorCountInLevel = competitorsCount;
		let startSlice = 0;
		let endSlice = competitorCountInLevel;

		for (let i = 0; i < levelsCount; i++) {
			console.log(`${i}: ${startSlice} - ${endSlice} | competitors count: ${competitorCountInLevel}`);
			const levelCompetitionData = this.state.competitionData.slice(startSlice, endSlice);

			levels.push(<LevelCard competitionData={levelCompetitionData} onCompetitorCardHover={this.onCompetitorCardHover} onCompetitorMouseLeave={this.onCompetitorCardMouseLeave} />);

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