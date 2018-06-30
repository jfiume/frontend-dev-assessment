import {
  SORTBYSTATUSASC,
  SORTBYSTATUSDEC,
  SORTBYDATEASC,
  SORTBYDATEDEC,
  RESETSTATUS,
  RESETDATE
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
      return Object.assign({}, state, { sortedByStatusAsc: true, sortedByStatusDec: false });
    case SORTBYSTATUSDEC:
      return Object.assign({}, state, { sortedByStatusAsc: false, sortedByStatusDec: true });
    case SORTBYDATEASC:
      return Object.assign({}, state, { sortedByDateAsc: true, sortedByDateDec: false });
    case SORTBYDATEDEC:
      return Object.assign({}, state, { sortedByDateAsc: false, sortedByDateDec: true });
    case RESETSTATUS:
      return Object.assign({}, state, { sortedByStatusAsc: false, sortedByStatusDec: false });
    case RESETDATE:
      return Object.assign({}, state, { sortedByDateAsc: false, sortedByDateDec: false });
    default:
      return state;
  }
};

export default SortedReducer;
