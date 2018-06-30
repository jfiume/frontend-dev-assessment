import React, { Component } from 'react';
import CandidateDetail from './candidate_detail_container';

class CandidateIndex extends Component {
  constructor(props) {
    super(props);

    this.filterByReviewed = this.filterByReviewed.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHead = this.renderTableHead.bind(this);
    this.handleStatusSort = this.handleStatusSort.bind(this);
    this.handleDateSort = this.handleDateSort.bind(this);
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

  handleStatusSort(e) {
    switch (e.target.value) {
      case "reset":
        this.props.resetStatus();
        break;
      case "sortByStatusAsc":
        this.props.sortByStatusAsc();
        break;
      case "sortByStatusDec":
        this.props.sortByStatusDec();
        break;
      default:
        this.props.resetStatus();
    };
  }

  handleDateSort(e) {
    switch (e.target.value) {
      case "reset":
        this.props.resetDate();
        break;
      case "sortByDateAsc":
        this.props.sortByDateAsc();
        break;
      case "sortByDateDec":
        this.props.sortByDateDec();
        break;
      default:
        this.props.resetDate();
    };
  }

  renderButtons() {
    return (
      <section>
        <button onClick={this.filterByReviewed}>filter by reviewed</button>
        <select className="sort" onChange={(e) => this.handleStatusSort(e)}>
          <option value="">Sort Status</option>
          <option value="sortByStatusAsc">A-Z</option>
          <option value="sortByStatusDec">Z-A</option>
          <option value="reset">Unsort</option>
        </select>
        <select className="sort" onChange={(e) => this.handleDateSort(e)}>
          <option value="">Sort Date</option>
          <option value="sortByDateAsc">Earliest</option>
          <option value="sortDateDec">Latest</option>
          <option value="reset">Unsort</option>
        </select>
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
      // sets the appropriate array to render based on our sorting options
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
      // What we render when we click the sorting buttons
      if (sortArr.length > 0) {
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
      <div>
        <img src="//hireanesquire.com/wp-content/uploads/2015/02/hae-logo-220px-lt-3.png" alt="Hire An Esquire"/>
        <div>{this.renderTable()}</div>
      </div>
    )
  }
}

export default CandidateIndex;
