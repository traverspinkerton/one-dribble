import React, { Component } from 'react';
import NBA from 'nba';

class SearchBar extends Component {
  state = {
    inputText: ""
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const playerInfo = NBA.findPlayer(this.state.inputText);
    NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
      .then(data => {
        const playerInfo = [ data.commonPlayerInfo[0], data.playerHeadlineStats[0] ];
        console.log(playerInfo);
        this.props.updateList(playerInfo);

      });
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input placeholder="Enter the name of a player" value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
