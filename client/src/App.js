import React, { Component } from "react";
import "./App.css";
import CandidateIndex from './components/candidate_index_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CandidateIndex/>
      </div>
    );
  }
}

export default App;
