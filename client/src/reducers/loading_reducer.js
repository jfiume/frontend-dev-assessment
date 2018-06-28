import {
  RECEIVE_CANDIDATES,
  START_LOADING_ALL_CANDIDATES
} from '../actions/candidate_actions';

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CANDIDATES:
      return Object.assign({}, state, { loading: false });
    case START_LOADING_ALL_CANDIDATES:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default loadingReducer;
