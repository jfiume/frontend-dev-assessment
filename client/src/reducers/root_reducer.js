import { combineReducers } from 'redux';

import CandidatesReducer from './candidate_reducer';
import loadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  candidates: CandidatesReducer,
  loadingStatus: loadingReducer,
});

export default RootReducer;
