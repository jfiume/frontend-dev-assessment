import React, { Component } from 'react';
import CandidateDetail from './candidate_detail_container';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);

    this.filterByReviewed = this.filterByReviewed.bind(this);
    this.sorted = this.sorted.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHead = this.renderTableHead.bind(this);
  }

  componentDidMount() {
    this.props.fetchCandidates();
  }

  componentWillReceiveProps(nextProps) {
    // When we filter by reviewed, we need to rerender the page
    if (nextProps.filterByReviewedObj !== this.props.filterByReviewedObj) {
      this.props.fetchCandidates();
    }
  }

  componentDidUpdate(prevProps) {
    // When we sort, we also need to rerender the page
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

  renderButtons() {
    return (
      <section>
        <button onClick={this.filterByReviewed}>filter by reviewed</button>
        <button onClick={this.sorted}>sort by status and date applied</button>
      </section>
    )
  }

  renderTableHead() {
    // I used a table to display the candidates data so that it is easy to read
    return (
      <tr>
        <th>name</th>
        <th>years of experience</th>
        <th>status</th>
        <th>date applied</th>
        <th>reviewed</th>
        <th>description</th>
        <th>update</th>
      </tr>
    )
  }

  renderTable() {
    const { loading } = this.props.loadingStatus;
    // We have to make sure our asynchronous fetch call has returned data before we can render
    if (!loading && Object.values(this.props.candidates).length > 0) {
      const candidates = Object.values(this.props.candidates);
      const reviewedObj = this.props.filterByReviewedObj.filterByReviewed;
      const reviewed = this.props.reviewed;
      // What we render when we click 'filter by reviewed' button
      if (reviewedObj) {
        return (
          <div>
            <div>{this.renderButtons()}</div>
            <table className="candidates">
              <thead>
                {this.renderTableHead()}
              </thead>
              <tbody>
                {reviewed.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}
              </tbody>
            </table>
          </div>
        );
      }
      const sorted = this.props.sorted.sorted;
      const sortArr = this.props.sortArr;
      // What we render when we click 'sort by status and date applied' button
      if (sorted) {
        return (
          <div>
            <div>{this.renderButtons()}</div>
            <table className="candidates">
              <thead>
                {this.renderTableHead()}
              </thead>
              <tbody>
                {sortArr.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}
              </tbody>
            </table>
          </div>
        );
      }
      // Render all candidates
      return (
        <div>
          <div>{this.renderButtons()}</div>
          <table className="candidates">
            <thead>
              {this.renderTableHead()}
            </thead>
            <tbody>
              {candidates.map(candidate => <CandidateDetail key={candidate.id} candidate={candidate} />)}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>loading</div>
    }
  }

  render() {
    return (
      <div>{this.renderTable()}</div>
    )
  }
}

export default CandidateIndex;
