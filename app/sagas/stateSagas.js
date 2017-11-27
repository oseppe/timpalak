import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { RECORD_COMPETITION, SHOW_SAVE_ID, LOAD_COMPETITION, GET_SAVED_COMPETITION, START_NEW_COMPETITION } from '../actionTypes'
import store from '../store'
import { generate } from 'shortid'
import { db } from '../mockDb'
import { generateCompetitors, buildData } from '../utility/utility'

function* sagaSaveState() {
	yield delay(3000);

	const state = store.getState();
	const key = state.saveKey;
	const stringifiedState = JSON.stringify(state);
	
	db[key] = stringifiedState;

	yield put({type: SHOW_SAVE_ID, key})
}

function* sagaLoadState(payload) {
	yield delay(3000);
	const key = payload.saveKey;
	
	let stringifiedState = '';

	// slower than 'in' but doesnt check methods from prototype
	const isKeyValid = db.hasOwnProperty(key);
	
	if (isKeyValid) stringifiedState = db[key];

	yield put({type: LOAD_COMPETITION, stringifiedState, isKeyValid})
}

function* sagaNewState() {
	yield delay(500);

	const key = generate();
	const competitors = generateCompetitors();
	const data = buildData(competitors);
	data.saveKey = key;

	const state = Object.assign({}, data);
	const stringifiedState = JSON.stringify(state);

	db[key] = stringifiedState;

	yield put({type: LOAD_COMPETITION, stringifiedState, isKeyValid: true});
}

function* rootSaga() {  
  yield takeEvery(RECORD_COMPETITION, sagaSaveState);
  yield takeEvery(GET_SAVED_COMPETITION, sagaLoadState);
  yield takeEvery(START_NEW_COMPETITION, sagaNewState);
}

export { rootSaga };