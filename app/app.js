import React, { Component } from 'react'
import { render } from 'react-dom'
import BracketCard from './components/bracketCard/bracketCard'
import MatchCard from './components/matchCard/matchCard'
import { buildCompetitionData, buildLevels, computeBracketCount } from './utility/utility'

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

		console.log(this.state.competitionData);
	}

	render() {
		const competitorsCount = this.state.competitors.length;

		const levelsCount = Math.log2(competitorsCount);
		const bracketCount = competitorsCount / 4;
		const matchesCount = competitorsCount - 1;

		const competitionData = this.state.competitionData;
		
		const levels = [];

		levels.push(buildLevels(competitionData, levelsCount, this.onCompetitorCardHover));

		const finalMatchCompetitors = [competitionData[competitionData.length - 2], competitionData[competitionData.length - 1]];
		
		const finalMatch = <div className="col m3 l2">
				<MatchCard matchCompetitors={finalMatchCompetitors} matchNumber={finalMatchCompetitors[0].matchNumber}/>
			</div>;

		levels.push(finalMatch);

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