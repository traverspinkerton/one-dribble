import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchBar from './search_bar';
import PlayerInfo from './player_info';

class App extends Component {
  state = {
    list: []
  }

  updateList = list => {
    console.log('app updatelist: ', list);
    this.setState({list});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">One Dribble</h1>
        </header>
        <SearchBar list={this.state.list} updateList={this.updateList}/>
        <PlayerInfo list={this.state.list} />
      </div>
    );
  }
}

export default App;
