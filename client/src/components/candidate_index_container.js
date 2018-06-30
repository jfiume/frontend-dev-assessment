import { connect } from 'react-redux';
import {
  fetchCandidates,
  filterByReviewed
} from '../actions/candidate_actions';
import {
  sortByStatusAsc,
  sortByStatusDec,
  sortByDateAsc,
  sortByDateDec,
  resetStatus,
  resetDate
} from '../actions/sorting_actions';
import CandidateIndex from './candidate_index';
import {
  filterReviewed,
  sortStatusAsc,
  sortStatusDec,
  sortDateAsc,
  sortDateDec,
  sortStatusAndDateAsc,
  sortStatusAndDateDec,
  sortStatusAscDateDec,
  sortStatusDecDateAsc
} from '../reducers/selectors';


const mapStateToProps = ( { candidates, loadingStatus, filterByReviewedObj, sorted } ) => {
  return ({
    candidates,
    loadingStatus,
    filterByReviewedObj,
    reviewed: filterReviewed(candidates),
    sorted,
    sortStatusAsc: sortStatusAsc(candidates),
    sortStatusDec: sortStatusDec(candidates),
    sortDateAsc: sortDateAsc(candidates),
    sortDateDec: sortDateDec(candidates),
    sortStatusAndDateAsc: sortStatusAndDateAsc(candidates),
    sortStatusAndDateDec: sortStatusAndDateDec(candidates),
    sortStatusAscDateDec: sortStatusAscDateDec(candidates),
    sortStatusDecDateAsc: sortStatusDecDateAsc(candidates),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates()),
    filterByReviewed: () => dispatch(filterByReviewed()),
    sortByStatusAsc: () => dispatch(sortByStatusAsc()),
    sortByStatusDec: () => dispatch(sortByStatusDec()),
    sortByDateAsc: () => dispatch(sortByDateAsc()),
    sortByDateDec: () => dispatch(sortByDateDec()),
    resetStatus: () => dispatch(resetStatus()),
    resetDate: () => dispatch(resetDate()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateIndex);
