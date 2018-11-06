import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleStorage from "react-simple-storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addPlayer() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  ChangeWins = e => {
    this.setState({
      value: e.value
    });
  };

  ChangeLosses = e => {
    this.setState({
      value: e.value !== null ? e.value + 1 : null
    });
  };

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
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addPlayer()}
            disabled={!this.state.newItem.length}
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
                        placeholder="please enter value"
                        value={this.state.value}
                        onChange={this.ChangeWins}
                      />{" "}
                      wins
                    </label>
                    <br />
                    <label>
                      <input
                        placeholder="please enter value"
                        value={
                          this.state.value == null ? null : this.state.value - 1
                        }
                        onChange={this.ChangeLosses}
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
