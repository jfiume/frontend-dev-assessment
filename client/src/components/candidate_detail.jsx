import React, { Component } from 'react';

class CandidateDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { candidate } = this.props;
    return (
      <div>
        <span>{candidate.name}</span>
        <span>{candidate.years_exp}</span>
        <span>{candidate.status}</span>
        <span>{candidate.date_applied}</span>
        <span>{candidate.reviewed}</span>
        <span>{candidate.description}</span>
      </div>
    )
  }
}

export default CandidateDetail;
