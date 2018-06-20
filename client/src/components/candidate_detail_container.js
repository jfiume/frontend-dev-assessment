import { connect } from 'react-redux';
import CandidateDetail from './candidate_detail';

const mapStateToProps = (ownProps) => {
  return {
    candidates: ownProps.candidates
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateDetail);
