import * as Types from '../constants/inspectionTypes';
import {Inspection} from '../../models/inspection';

export const fetchInspections = () => ({
  type: Types.FETCH_INSPECTIONS,
});

export const fetchInspectionsSuccess = (
  inspections: Inspection[],
) => ({
  type: Types.FETCH_INSPECTIONS_SUCCESS,
  payload: inspections,
});

export const fetchInspectionsFailure = (
  error: string,
) => ({
  type: Types.FETCH_INSPECTIONS_FAILURE,
  payload: error,
});

export const addInspection = (inspection: Inspection) => ({
  type: Types.ADD_INSPECTION,
  payload: inspection,
});