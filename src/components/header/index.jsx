import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  static propTypes = {
    addToDo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    // console.log(event.target.value, event.keyCode)
    if (target.value.trim() === "") {
      alert("Input cannot be empty!");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addToDo(todoObj);
    target.value = " ";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Please enter your value."
        />
      </div>
    );
  }
}
