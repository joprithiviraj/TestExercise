import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from '../constants/inspectionTypes';

import {
  fetchInspectionsFailure,
  fetchInspectionsSuccess,
} from '../actions/inspectionActions';

import {
  getInspectionList_API,
  addInspection_API,
} from '../../api/ServiceApi';

function* fetchInspectionSaga(): any {
  try {
    const response = yield call(getInspectionList_API);

    yield put(fetchInspectionsSuccess(response));
  } catch (error: any) {
    yield put(fetchInspectionsFailure(error.message));
  }
}

function* addInspectionSaga(action: any): any {
  try {
    // POST
    yield call(addInspection_API, action.payload);

    // GET latest list
    const response = yield call(getInspectionList_API);

    // Update Redux Store
    yield put(fetchInspectionsSuccess(response));
  } catch (error: any) {
    console.log(error);
  }
}

export default function* inspectionSaga() {
  yield takeLatest(
    Types.FETCH_INSPECTIONS,
    fetchInspectionSaga,
  );

  yield takeLatest(
    Types.ADD_INSPECTION,
    addInspectionSaga,
  );
}