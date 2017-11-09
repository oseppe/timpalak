import React, { Component } from 'react'
import { render } from 'react-dom'
import BracketCard from './components/bracketCard/bracketCard'
import MatchCard from './components/matchCard/matchCard'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		const competitors = 16;

		const levelsCount = Math.log2(competitors);
		const bracketCount = competitors / 4;
		const matchesCount = competitors - 1;

		const levelBuilder = (level) => {

			const bracketCount = 2 ** (level - 2);

			const brackets = Array(bracketCount).fill().map((item, index) => <BracketCard key={index} />);

			return (
				<div className="col m3 l2">
					{ brackets }
				</div>
			);
		}

		const levels = [];

		for (let level = levelsCount; level > 1; level--) {
			levels.push(levelBuilder(level));
		}

		levels.push( 
			<div className="col m3 l2">
				<MatchCard />
			</div> 
		);

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