import { createStore, applyMiddleware } from 'redux';
import { buildCompetitionData, generateCompetitors } from './utility/utility'
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, 
	{ players: {}, matches: {}, levels: {}, saveKey: '' },
	applyMiddleware(sagaMiddleware) ,
	window.devToolsExtension ? window.devToolsExtension() : undefined);

store.runSaga = sagaMiddleware.run;

export default store;