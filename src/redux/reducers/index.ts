import {combineReducers} from 'redux';
import inspectionReducer from './inspectionReducer';

const rootReducer = combineReducers({
  inspection: inspectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;