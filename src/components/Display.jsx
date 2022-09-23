import React, { Component } from "react";
import DisplayGeneral from "./DisplayGeneral";

const styles = {
    border: '1.8px solid blue',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '0px 20px',
    width: '40%',
    color: 'blue',
}

const barStyle = {
    backgroundColor: 'blue',
    height: '1px',
    border: 'none',
}

export default class Display extends Component {
  render() {
    return (
      <div style={styles}>
        <DisplayGeneral />
        <hr style={barStyle} />
      </div>
    );
  }
}