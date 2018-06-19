import {
  RECEIVE_CANDIDATES
} from '../actions/candidate_actions';

const CandidatesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CANDIDATES:
      return Object.assign({}, action.candidates);
    default:
      return state
  }
}

export default CandidatesReducer;
