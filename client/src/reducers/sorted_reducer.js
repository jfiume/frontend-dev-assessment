import {
  SORTED
} from '../actions/candidate_actions';

const initialState = {
  sorted: false
}

const SortedReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SORTED:
      return Object.assign({}, state, { sorted: !state.sorted });
    default:
      return state
  }
}

export default SortedReducer;
