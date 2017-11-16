import { createStore } from 'redux';
import { buildCompetitionData, generateCompetitors } from './utility/utility'
import { reducer } from './reducer';

const state = buildCompetitionData(generateCompetitors());

export const store = createStore(reducer, state);