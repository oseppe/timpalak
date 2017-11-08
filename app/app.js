import React, { Component } from 'react'
import { render } from 'react-dom'
import MatchCard from './components/matchCard/matchCard'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="row">
				<MatchCard />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)