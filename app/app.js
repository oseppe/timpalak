import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="row">
				hello
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)