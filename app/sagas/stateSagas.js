import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { RECORD_COMPETITION, SHOW_SAVE_ID } from '../actionTypes'
import store from '../store'
import { generate } from 'shortid'
import { db } from '../mockDb'

function* sagaSaveState() {
	yield delay(3000);

	const state = store.getState();
	const stringifiedState = JSON.stringify(state);
	const key = generate();

	db[key] = stringifiedState;

	yield put({type: SHOW_SAVE_ID, key})
}

function* rootSaga() {  
  yield takeEvery(RECORD_COMPETITION, sagaSaveState)
}

export { sagaSaveState, rootSaga };