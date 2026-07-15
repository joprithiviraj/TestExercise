import * as Types from '../constants/inspectionTypes';
import {Inspection} from '../../models/inspection';

export interface InspectionState {
  loading: boolean;
  inspections: Inspection[];
  error: string | null;
}

const initialState: InspectionState = {
  loading: false,
  inspections: [],
  error: null,
};

const inspectionReducer = (
  state = initialState,
  action: any,
): InspectionState => {
  switch (action.type) {
    case Types.FETCH_INSPECTIONS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.FETCH_INSPECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        inspections: action.payload,
      };

    case Types.FETCH_INSPECTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inspectionReducer;