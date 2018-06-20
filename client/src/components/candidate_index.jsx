import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCandidates,
  filterByReviewed
} from '../actions/candidate_actions';
import CandidateDetail from './candidate_detail_container';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);
    this.filterByReviewed = this.filterByReviewed.bind(this);
  }

  componentDidMount() {
    this.props.fetchCandidates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterByReviewedObj !== this.props.filterByReviewedObj) {
      this.props.fetchCandidates();
    }
  }

  filterByReviewed() {
    this.props.filterByReviewed();
  }

  render() {
    const { loading } = this.props.loadingStatus;
    if (!loading && Object.values(this.props.candidates).length > 0) {
      const { filterByReviewedObj } = this.props.filterByReviewedObj;
      if (this.props.filterByReviewedObj.filterByReviewed) {
        return (
          <div>
            <button onClick={this.filterByReviewed}>filter by reviewed</button>
            <section>{this.props.reviewed.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}</section>
          </div>
        )
      } else {
        return (
          <div>
            <button onClick={this.filterByReviewed}>filter by reviewed</button>
            <section>{Object.values(this.props.candidates).map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}</section>
          </div>
        )
      }
    } else {
      return <div>loading</div>
    }
  }
}

export default CandidateIndex;
