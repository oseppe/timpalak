import React, { Component } from 'react'
import { render } from 'react-dom'
import BracketCard from './components/bracketCard/bracketCard'
import MatchCard from './components/matchCard/matchCard'
import { buildCompetitionData, computeBracketCount } from './utility/competitionDataParser'

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

		// build first level
		const buildFirstLevel = (competitionData, level) => {
			const bracketCount = computeBracketCount(level);
			const brackets = [];

			let sliceStart = 0;
			let sliceEnd = 4;

			for (let i = 0; i < bracketCount; i++) {
				let bracketCompetitors = competitionData.slice(sliceStart, sliceEnd);

				brackets.push(<BracketCard bracketCompetitors={bracketCompetitors} />)

				sliceStart = sliceEnd;
				sliceEnd = sliceEnd + 4;
			}

			return brackets;
		}



		const firstLevel = buildFirstLevel(competitionData, levelsCount);

		// const levelBuilder = (level) => {

		// 	const bracketCount = computeBracketCount(level);

		// 	const brackets = Array(bracketCount).fill().map((item, index) => <BracketCard key={index} />);

		// 	return (
		// 		<div className="col m3 l2">
		// 			{ brackets }
		// 		</div>
		// 	);
		// }

		

		// for (let level = levelsCount; level > 1; level--) {
		// 	levels.push(levelBuilder(level));
		// }

		// levels.push( 
		// 	<div className="col m3 l2">
		// 		<MatchCard />
		// 	</div> 
		// );

		return(
			<div className="row">
				{ firstLevel }
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)