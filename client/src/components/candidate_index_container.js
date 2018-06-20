import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCandidates,
  filterByReviewed
} from '../actions/candidate_actions';
import CandidateIndex from './candidate_index';
import { filterReviewed } from '../reducers/selectors';


const mapStateToProps = ( { candidates, loadingStatus, filterByReviewedObj } ) => {
  return ({
    candidates,
    loadingStatus,
    filterByReviewedObj,
    reviewed: filterReviewed(candidates)
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates()),
    filterByReviewed: () => dispatch(filterByReviewed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateIndex);
