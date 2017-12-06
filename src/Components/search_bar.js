import React, { Component } from 'react';
import playerList from '../players';

const url = 'commonplayerinfo?PlayerID=';

class SearchBar extends Component {
  state = {
    inputText: "",
    notFound: ""
  }

  findPlayerId = playerName => {
    playerName = playerName.split(' ');

    console.log(playerName);
    // search through player list
    /*for (let player of playerList) {
      console.log(`${player.firstName} ${player.lastName}`);
      if (playerName === `${player.firstName} ${player.LastName}`) {
        console.log(player);
        return player.playerId
      };
    }*/
    return playerList.filter(p => p.firstName === playerName[0] && p.lastName === playerName[1])[0].playerId;
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const player = this.state.inputText;
    const playerId = this.findPlayerId(player);

    if (playerId) {
        fetch(url + playerId, { mode: 'cors'})
        .then(resp => resp.json() )
        .then(respJson => {
          this.props.updateList(respJson.resultSets);
          this.setState({ inputText: "", notFound: "" });
        })
        .catch(error => {
          console.error(error);
        })
    }
    /*const playerInfo = NBA.findPlayer(player);*/

    /*if (playerInfo) {
      NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
      .then(data => {
        const playerInfo = [ data.commonPlayerInfo[0], data.playerHeadlineStats[0] ];
        console.log(playerInfo);
        this.props.updateList(playerInfo);
        this.setState({ inputText: "", notFound: "" });

        console.log(NBA.stats);/*.playerStats({ PlayerID: playerInfo.playerId })*/
//      })
    /*} else {
      let notFound = player + " could not be found. Please enter a valid NBA player name."
      this.setState({ notFound });
      this.props.updateList([]);
    }*/
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input placeholder="Enter a current NBA player's name" value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
        </form>
        <p>{this.state.notFound}</p>
      </div>
    )
  }
}

export default SearchBar;
