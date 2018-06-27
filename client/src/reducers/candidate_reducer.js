import {
  RECEIVE_CANDIDATES,
  RECEIVE_CANDIDATE
} from '../actions/candidate_actions';

const CandidatesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CANDIDATES:
      return Object.assign({}, action.candidates);
    case RECEIVE_CANDIDATE:
      const candidateToUpdate = {[action.candidate.id]: action.candidate}
      return Object.assign({}, candidateToUpdate);
    default:
      return state;
  }
}

export default CandidatesReducer;
