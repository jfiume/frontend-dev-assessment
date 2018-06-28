import { connect } from 'react-redux';
import {
  fetchCandidates,
  filterByReviewed
} from '../actions/candidate_actions';
import CandidateIndex from './candidate_index';
import { filterReviewed, sortStatusAsc, sortStatusDec, sortDateAsc, sortDateDec } from '../reducers/selectors';


const mapStateToProps = ( { candidates, loadingStatus, filterByReviewedObj, sorted } ) => {
  return ({
    candidates,
    loadingStatus,
    filterByReviewedObj,
    reviewed: filterReviewed(candidates),
    sorted
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates()),
    filterByReviewed: () => dispatch(filterByReviewed()),
    sortStatusAsc: () => dispatch(sortStatusAsc()),
    sortStatusDec: () => dispatch(sortStatusDec()),
    sortDateAsc: () => dispatch(sortDateAsc()),
    sortDateDec: () => dispatch(sortDateDec()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateIndex);
