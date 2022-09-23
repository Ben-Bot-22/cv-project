import React, { Component } from 'react';

const styles = {
  color: 'blue',
  width: '98%',
  height: '25px',
};

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          style={styles}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          // value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
