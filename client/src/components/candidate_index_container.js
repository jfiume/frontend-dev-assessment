import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCandidates
} from '../actions/candidate_actions';
import CandidateIndex from './candidate_index';


const mapStateToProps = ( { candidates, loadingStatus } ) => {
  return ({
    candidates,
    loadingStatus
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateIndex);
