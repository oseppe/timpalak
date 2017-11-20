import { createStore } from 'redux';
import { buildCompetitionData, generateCompetitors } from './utility/utility'
import reducer from './reducer';

export const store = createStore(reducer, 
	{players: {}, matches: {}, levels: {}}, 
	window.devToolsExtension ? window.devToolsExtension() : undefined);