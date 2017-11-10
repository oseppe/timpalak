import React, { Component } from 'react'
import { render } from 'react-dom'
import BracketCard from './components/bracketCard/bracketCard'
import MatchCard from './components/matchCard/matchCard'
import { buildCompetitionData, buildLevels, computeBracketCount } from './utility/utility'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		const competitors = [
			'Alistar', 'Blitzcrank', 'Janna', 'Karma', 'Leona', 'Lulu', 'Morgana', 'Nami', 
			'Nautilus', 'Rakan', 'Sona', 'Soraka', 'Taric', 'Thresh',  'Zilean', 'Zyra'
		];

		const competitorsCount = competitors.length;

		const levelsCount = Math.log2(competitorsCount);
		const bracketCount = competitorsCount / 4;
		const matchesCount = competitorsCount - 1;

		const competitionData = buildCompetitionData(competitors);
		
		const levels = [];

		levels.push(buildLevels(competitionData, levelsCount));

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