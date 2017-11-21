import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { START_NEW_COMPETITION } from './actionTypes';
import { store } from './store';
import { Provider, connect } from 'react-redux';


class Board extends Component {
	render() {
		const handleStartNew = this.props.handleStartNew;
		const levelsData = this.props.levels;
		const levels = [];

		const countLevels = Object.keys(levelsData).length;
		
		for (let i = 0; i < countLevels; i++) {
			levels.push(<LevelCard key={i}
				matchIds={levelsData[i]} />)
		}

		return(
			<div>
				<div className="row" style={{
					paddingTop: '10px',
				}}>
					<div className="col s12 m12 l12 center-align">
						<button className="btn waves-effect waves-light" onClick={ handleStartNew }>
							Restart
						</button>
					</div>
				</div>
				<div className="row">
					{ levels }
				</div>
			</div>
		)
	}
}

const startNewCompetition = {type: START_NEW_COMPETITION};

function mapStateToProps(state) {
	return {
		players: state.players,
		matches: state.matches,
		levels: state.levels
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleStartNew: () => dispatch(startNewCompetition)
	}
}

let App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)