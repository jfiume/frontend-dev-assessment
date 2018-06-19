import {
  RECEIVE_CANIDATES
} from '../actions/canidate_actions';

const CanidatesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CANIDATES:
      return Object.assign({}, action.candidates);
    default:
      return state
  }
}
