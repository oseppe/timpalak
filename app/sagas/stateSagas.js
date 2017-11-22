import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { RECORD_COMPETITION, SHOW_SAVE_ID, LOAD_COMPETITION, GET_SAVED_COMPETITION } from '../actionTypes'
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

function* sagaLoadState() {
	yield delay(3000);

	const stringifiedState = db;

	yield put({type: LOAD_COMPETITION, stringifiedState})

}

function* rootSaga() {  
  yield takeEvery(RECORD_COMPETITION, sagaSaveState);
  yield takeEvery(GET_SAVED_COMPETITION, sagaLoadState);
}

export { sagaSaveState, rootSaga };