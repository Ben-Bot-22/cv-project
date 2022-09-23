import React, { Component } from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  width: '100%',
  color: 'blue',
};

export default class Education extends Component {
  render() {
    return (
      <div style={styles}>
        <h3>Education</h3>
      </div>
    );
  }
}
