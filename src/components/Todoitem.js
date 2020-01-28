import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Todoitem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  getBtnStyle = () => {
    return {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            style={this.getBtnStyle()}
            onClick={this.props.delTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};
