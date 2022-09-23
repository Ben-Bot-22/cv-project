import React, { Component } from 'react';
import DisplayGeneral from './DisplayGeneral';

const styles = {
  border: '2px solid blue',
  borderRadius: '5px',
  backgroundColor: 'white',
  padding: '0px 20px',
  // width: '40%',
  color: 'blue',
  width: 500,
  minWidth: 400,
};

const barStyle = {
  backgroundColor: 'blue',
  height: '1px',
  border: 'none',
};

export default class Display extends Component {
  render() {
    return (
      <div style={styles}>
        <DisplayGeneral data={this.props.data} />
        <hr style={barStyle} />
      </div>
    );
  }
}
