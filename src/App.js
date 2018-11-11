import React, { Component } from "react";
import "./App.css";
import SimpleStorage from "react-simple-storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addPlayer() {
    const newPlayer = {
      id: 1 + Math.random(),
      value: this.state.newPlayer.slice()
    };
    const list = [...this.state.list];
    list.push(newPlayer);
    this.setState({
      list,
      newPlayer: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <form>
          <label className="player-name">
            <input
              type="text"
              required
              value={this.state.newPlayer}
              onChange={e => this.updateInput("newPlayer", e.target.value)}
            />
            <div className="label-text">Add Player</div>
          </label>
          <button
            onClick={() => this.addPlayer()}
            disabled={!this.state.newPlayer.length}
          >
            Submit
          </button>
        </form>
        <ul className="player-container">
          {this.state.list.map(item => {
            return (
              <li className="players" key={item.id}>
                <div className="card">{item.value}</div>
                <label className="wins-label">
                  <input type="number" min="0" />
                  <div className="label-text">wins</div>
                </label>
                <label>
                  <input type="number" min="0" />
                  <div className="label-text loss">losses</div>
                </label>
                <button
                  className="delete-button"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
