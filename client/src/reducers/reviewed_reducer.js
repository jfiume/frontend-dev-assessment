import {
  FILTER_BY_REVIEWED
} from '../actions/candidate_actions';

const initialState = {
  filterByReviewed: false
};

const ReviewedReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FILTER_BY_REVIEWED:
      return Object.assign({}, state, { filterByReviewed: !state.filterByReviewed });
    default:
      return state;
  }
}

export default ReviewedReducer;
