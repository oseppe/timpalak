import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { RECORD_COMPETITION, START_NEW_COMPETITION } from './actionTypes';
import store from './store';
import { Provider, connect } from 'react-redux';
import { rootSaga } from './sagas/stateSagas';
import { db } from './mockDb'

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
					<div className="col s12 m6 offset-m3 l4 offset-l4">
						<button className="btn waves-effect waves-light" onClick={ handleStartNew }>
							Restart
						</button>
						<button className="btn waves-effect waves-light" onClick={ this.props.handleSave } style={{
							marginLeft: '7px',
							marginRight: '7px'
						}}>
							Save
						</button>
						<button className="btn waves-effect waves-light">
							Load
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6 offset-m3 l4 offset-l4">
						<div className="row">
							<div className="col s8 m9 l9" style={{
								padding: 0,
							}}>
								<input type="text" value={this.props.saveKey} readOnly />
							</div>
							<div className="col s4 m3 l3">
								<button className="grey btn-flat">
									<i className="material-icons">content_copy</i>
								</button>
							</div>
						</div>
						<div className="row">
							<div className="col s8 m9 l9" style={{
								padding: 0,
							}}>
								<input type="text" />
							</div>
							<div className="col s4 m3 l3">
								<button className="grey btn-flat">
									<i className="material-icons">arrow_forward</i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{ levels }
				</div>
			</div>
		)
	}
}

const startNewCompetition = { type: START_NEW_COMPETITION };
const recordState = { type: RECORD_COMPETITION };

function mapStateToProps(state) {
	const saveKeys = state.saveKeys
	const saveKey = saveKeys.length === 0 ? '' : saveKeys[saveKeys.length - 1];

	return {
		levels: state.levels,
		saveKey,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleStartNew: () => dispatch(startNewCompetition),
		handleSave: () => dispatch(recordState),
	}
}

let App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);

store.runSaga(rootSaga);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)