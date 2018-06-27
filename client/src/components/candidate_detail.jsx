import React, { Component } from 'react';

class CandidateDetail extends Component {
  constructor(props) {
    super(props);

    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(id, e) {
    const status = {status: e.target.value};
    this.props.callUpdateStatus(id, status);
  }

  componentDidUpdate(prevProps) {
    // After we update a candidates' status, we have to rerender and show the full candidates list
    if (prevProps.candidates !== this.props.candidates) {
      this.props.fetchCandidates();
    }
  }

  render() {
    const { candidate } = this.props;
    const dateApplied = new Date(candidate.date_applied);
    return (
      <tr>
        <td>{candidate.name}</td>
        <td>{candidate.years_exp}</td>
        <td>{candidate.status}</td>
        <td>{dateApplied.toDateString()}</td>
        <td>{candidate.reviewed ? 'yes' : 'no'}</td>
        <td>{candidate.description}</td>
        <td>
          <select onChange={(e) => this.updateStatus(candidate.id, e)}>
            <option value="">Status</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </td>
      </tr>
    )
  }
}

export default CandidateDetail;
