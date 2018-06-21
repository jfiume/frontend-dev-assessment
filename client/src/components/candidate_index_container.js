import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCandidates,
  filterByReviewed,
  sorting
} from '../actions/candidate_actions';
import CandidateIndex from './candidate_index';
import { filterReviewed, sortedFunct } from '../reducers/selectors';


const mapStateToProps = ( { candidates, loadingStatus, filterByReviewedObj, sorted } ) => {
  return ({
    candidates,
    loadingStatus,
    filterByReviewedObj,
    sorted,
    reviewed: filterReviewed(candidates),
    sortArr: sortedFunct(candidates),
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates()),
    filterByReviewed: () => dispatch(filterByReviewed()),
    sorting: () => dispatch(sorting())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateIndex);
