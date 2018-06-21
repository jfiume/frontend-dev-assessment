import React, { Component } from 'react';
import CandidateDetail from './candidate_detail_container';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);

    this.filterByReviewed = this.filterByReviewed.bind(this);
    this.sorted = this.sorted.bind(this);
    this.renderFilter = this.renderFilter.bind(this);
    this.renderAll = this.renderAll.bind(this);
    this.renderSort = this.renderSort.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    this.props.fetchCandidates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterByReviewedObj !== this.props.filterByReviewedObj) {
      this.props.fetchCandidates();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sorted !== this.props.sorted) {
      this.props.fetchCandidates();
    }
  }

  filterByReviewed() {
    this.props.filterByReviewed();
  }

  sorted() {
    this.props.sorting();
  }

  renderFilter(reviewed) {
    return (
      <section>{reviewed.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}</section>
    )
  }

  renderAll(candidates) {
    return (
      <section>{candidates.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}</section>
    )
  }

  renderSort(sortArr) {
    return (
      <section>{sortArr.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}</section>
    )
  }

  renderButtons() {
    return (
      <div>
        <button onClick={this.filterByReviewed}>filter by reviewed</button>
        <button onClick={this.sorted}>sort by status and date applied</button>
      </div>
    )
  }

  render() {
    const { loading } = this.props.loadingStatus;
    if (!loading && Object.values(this.props.candidates).length > 0) {
      const candidates = Object.values(this.props.candidates)
      const reviewedObj = this.props.filterByReviewedObj.filterByReviewed
      const reviewed = this.props.reviewed
      if (reviewedObj) {
        return (
          <div>
            <div>{this.renderButtons()}</div>
            <div>{this.renderFilter(reviewed)}</div>
          </div>
        );
      }
      const sorted = this.props.sorted.sorted;
      const sortArr = this.props.sortArr;
      if (sorted) {
        return (
          <div>
            <div>{this.renderButtons()}</div>
            <div>{this.renderSort(sortArr)}</div>
          </div>
        );
      }
      return (
        <div>
          <div>{this.renderButtons()}</div>
          <div>{this.renderAll(candidates)}</div>
        </div>
      );
    } else {
      return <div>loading</div>
    }
  }
}

export default CandidateIndex;
