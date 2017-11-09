import React, { Component } from 'react'
import { render } from 'react-dom'
import BracketCard from './components/bracketCard/bracketCard'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		const competitors = 32;

		const bracketCount = 32 / 4;

		const brackets = [];

		console.log('here');
		console.log(bracketCount);

		for (let i = 0; i < bracketCount; i++) {
			brackets.push(<BracketCard />);
			console.log(i);
			console.log(brackets);
			console.log('------------');
		}

		return(
			<div>
				{ brackets }
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)