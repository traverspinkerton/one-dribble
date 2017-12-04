import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder="Enter the name of a player" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
