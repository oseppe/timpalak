import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { RECORD_COMPETITION, START_NEW_COMPETITION, GET_SAVED_COMPETITION } from './actionTypes';
import store from './store';
import { Provider, connect } from 'react-redux';
import ErrorBoundary from './components/errorBoundaries/app'
import Board from './components/board/Board'
import { rootSaga } from './sagas/stateSagas';

class App extends Component {

	render() {
		return(
			<ErrorBoundary>
				<Board />
			</ErrorBoundary>
		)
	}
}

store.runSaga(rootSaga);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)