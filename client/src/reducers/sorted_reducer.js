import {
  SORTBYSTATUSASC,
  SORTBYSTATUSDEC,
  SORTBYDATEASC,
  SORTBYDATEDEC,
} from '../actions/sorting_actions';

const initialState = {
  sortedByStatusAsc: false,
  sortedByStatusDec: false,
  sortedByDateAsc: false,
  sortedByDateDec: false
};

const SortedReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SORTBYSTATUSASC:
      return Object.assign({}, state, { sortedByStatusAsc: !state.sortedByStatusAsc });
    case SORTBYSTATUSDEC:
      return Object.assign({}, state, { sortedByStatusDec: !state.sortedByStatusDec });
    case SORTBYDATEASC:
      return Object.assign({}, state, { sortedByDateAsc: !state.sortedByDateAsc });
    case SORTBYDATEDEC:
      return Object.assign({}, state, { sortedByDateDec: !state.sortedByDateDec });
    default:
      return state;
  }
};

export default SortedReducer;
