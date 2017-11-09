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
		const buildFirstLevel = (competitionData) => {
			const bracketCount = computeBracketCount(levelsCount);
			const brackets = [];

			let bracketCompetitors = competitionData.slice(0, 4);

			brackets.push(<BracketCard bracketCompetitors={bracketCompetitors} />)

			console.log(bracketCount);

			return brackets;
		}



		const firstLevel = buildFirstLevel(competitionData);

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