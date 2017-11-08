import React, { Component } from 'react'
import { render } from 'react-dom'
import CompetitorCard from './components/competitorCard/competitorCard'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="row">
				<CompetitorCard />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)