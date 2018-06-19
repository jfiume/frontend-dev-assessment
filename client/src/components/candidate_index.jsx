import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCandidates
} from '../actions/candidate_actions';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCandidates();
  }

  render() {
    const { loading } = this.props.loadingStatus;
    if (!loading && Object.values(this.props.candidates).length > 0) {
      const { candidates } = this.props;
      const allCandidates = [];
      for (let i = 0; i < Object.values(candidates).length; i++) {
        allCandidates.push(Object.values(candidates[i]));
      }
        return (
          <div>{allCandidates}</div>
        )
    } else {
      return <div>loading</div>
    }
  }
}

export default CandidateIndex;

// const mapStateToProps = ( state ) => {
//   return ({
//     state
//   });
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCandidates: () => dispatch(fetchCandidates())
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CandidateIndex);
