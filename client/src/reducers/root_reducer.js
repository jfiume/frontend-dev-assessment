import { combineReducers } from 'redux';

import CandidatesReducer from './candidate_reducer';
import loadingReducer from './loading_reducer';
import ReviewedReducer from './reviewed_reducer';
import SortedReducer from './sorted_reducer';

const RootReducer = combineReducers({
  candidates: CandidatesReducer,
  loadingStatus: loadingReducer,
  filterByReviewedObj: ReviewedReducer,
  sorted: SortedReducer,
});

export default RootReducer;
