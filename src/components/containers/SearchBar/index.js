import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <from className="input-group">
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </from>
    );
  }
}
