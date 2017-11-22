import { takeEvery, takeLatest, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { RECORD_COMPETITION, SHOW_SAVE_ID } from '../actionTypes'

function* sagaSaveState() {
	yield delay(3000);
	
	const message = 'im from sagaSaveState';

	yield put({type: SHOW_SAVE_ID, message})
}

function* rootSaga() {  
  yield takeEvery(RECORD_COMPETITION, sagaSaveState)
}

export { sagaSaveState, rootSaga };