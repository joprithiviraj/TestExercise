import {all} from 'redux-saga/effects';
import inspectionSaga from './inspectionSaga';

export default function* rootSaga() {
  yield all([
    inspectionSaga(),
  ]);
}