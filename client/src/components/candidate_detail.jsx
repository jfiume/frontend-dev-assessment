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
    if (prevProps.candidates !== this.props.candidates) {
      this.props.fetchCandidates();
    }
  }

  render() {
    const { candidate } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>years of experience</th>
            <th>status</th>
            <th>date applied</th>
            <th>reviewed</th>
            <th>description</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{candidate.name}</td>
            <td>{candidate.years_exp}</td>
            <td>{candidate.status}</td>
            <td>{candidate.date_applied}</td>
            <td>{candidate.reviewed ? 'yes' : 'no'}</td>
            <td>{candidate.description}</td>
            <td><select onChange={(e) => this.updateStatus(candidate.id, e)}>
              <option value=""></option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default CandidateDetail;
