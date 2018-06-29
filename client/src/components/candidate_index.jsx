import React, { Component } from 'react';
import CandidateDetail from './candidate_detail_container';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);

    this.filterByReviewed = this.filterByReviewed.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHead = this.renderTableHead.bind(this);
    this.sortedByStatusAsc = this.sortedByStatusAsc.bind(this);
    this.sortedByStatusDec = this.sortedByStatusDec.bind(this);
    this.sortedByDateAsc = this.sortedByDateAsc.bind(this);
    this.sortedByDateDec = this.sortedByDateDec.bind(this);
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

  sortedByStatusAsc() {
    this.props.sortByStatusAsc();
  }

  sortedByStatusDec() {
    this.props.sortByStatusDec();
  }

  sortedByDateAsc() {
    this.props.sortByDateAsc();
  }

  sortedByDateDec() {
    this.props.sortByDateDec();
  }

  renderButtons() {
    return (
      <section>
        <button onClick={this.filterByReviewed}>filter by reviewed</button>
        <button onClick={this.sortedByStatusAsc}>sort by status ascending</button>
        <button onClick={this.sortedByStatusDec}>sort by status decending</button>
        <button onClick={this.sortedByDateAsc}>sort by date ascending</button>
        <button onClick={this.sortedByDateDec}>sort by date decending</button>
      </section>
    )
  }

  renderTableHead() {
    // I used a table to display the candidates data so that it is easy to read
    return (
      <tr>
        <th>Name</th>
        <th>Years of Experience</th>
        <th>Status</th>
        <th id="date-applied">Date Applied</th>
        <th>Reviewed</th>
        <th>Description</th>
        <th>Update</th>
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
      const sorted = this.props.sorted;
      let sortArr = [];
      if (sorted.sortedByStatusAsc && sorted.sortedByDateAsc) {
        sortArr = this.props.sortStatusAndDateAsc;
      } else if (sorted.sortedByStatusAsc && sorted.sortedByDateDec) {
        sortArr = this.props.sortStatusAscDateDec;
      } else if (sorted.sortedByStatusDec && sorted.sortedByDateAsc) {
        sortArr = this.props.sortStatusDecDateAsc;
      } else if (sorted.sortedByStatusDec && sorted.sortedByDateDec) {
        sortArr = this.props.sortStatusAndDateDec;
      } else if (sorted.sortedByStatusAsc) {
        sortArr = this.props.sortStatusAsc;
      } else if (sorted.sortedByStatusDec) {
        sortArr = this.props.sortStatusDec;
      } else if (sorted.sortedByDateAsc) {
        sortArr = this.props.sortDateAsc;
      } else if (sorted.sortedByDateDec) {
        sortArr = this.props.sortDateDec;
      };
      // What we render when we click
      if (sorted.sortedByStatusAsc || sorted.sortedByStatusDec || sorted.sortedByDateAsc || sorted.sortedByDateDec) {
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
