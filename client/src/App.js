import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CandidateIndex from './components/candidate_index_container';

class App extends Component {
  async getCandidates() {
    try {
      const response = await fetch("/candidates/");
      const candidates = await response.json();
      // console.log("Received candidates:", candidates);
    } catch (e) {
      // console.error("API request raised an error:", e);
    }
  }
  componentDidMount() {
    this.getCandidates();
  }
  render() {
    return (
      <div className="App">
        <CandidateIndex/>
      </div>
    );
  }
}

export default App;
