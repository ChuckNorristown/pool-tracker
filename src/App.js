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
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          <input
            type="text"
            placeholder="Enter Player"
            value={this.state.newPlayer}
            onChange={e => this.updateInput("newPlayer", e.target.value)}
          />
          <button
            onClick={() => this.addPlayer()}
            disabled={!this.state.newPlayer.length}
          >
            &#43; Add
          </button>
          <div
            style={{
              padding: 50,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto"
            }}
          >
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <label>
                    <br />
                      <input
                        type="number"
                        min="0"
                        placeholder="please enter value"
                      />{" "}
                      wins
                    </label>
                    <br />
                    <label>
                      <input
                        type="number"
                        min="0"
                        placeholder="please enter value"
                      />{" "}
                      losses
                    </label>
                    <br />
                    <button onClick={() => this.deleteItem(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
