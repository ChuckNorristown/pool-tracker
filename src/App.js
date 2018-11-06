import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleStorage from "react-simple-storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      addResult: "",
      list: []
    };
  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }





  addPlayer() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // copy current list of items
    const list = [...this.state.list];
    // add the new item to the list
    list.push(newItem);
    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  addResult() {
    // create a new item with unique id
    const addResult = {
      id: 1 + Math.random(),
      value: this.state.addResult.slice()
    };
    // copy current list of items
    const list = [...this.state.list];
    // add the new item to the list
    list.push(addResult);
    // update state with new list, reset the new item input
    this.setState({
      list,
      addResult: ""
    });
  }




  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
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
