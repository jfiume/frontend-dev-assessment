import React, { Component } from 'react';

class CandidateDetail extends Component {
  constructor(props) {
    super(props);
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
          </tr>
        </tbody>
      </table>
    )
  }
}

export default CandidateDetail;
