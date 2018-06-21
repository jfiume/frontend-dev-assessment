import { connect } from 'react-redux';
import CandidateDetail from './candidate_detail';
import {
  fetchCandidates,
  callUpdateStatus
} from '../actions/candidate_actions';

const mapStateToProps = (ownProps) => {
  return {
    candidates: ownProps.candidates
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates()),
    callUpdateStatus: (id, status) => dispatch(callUpdateStatus(id, status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateDetail);
