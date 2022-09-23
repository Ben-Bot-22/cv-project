import React, { Component } from 'react';

const styles = {
  resize: 'none',
  width: '95%',
  color: 'blue',
};

export default class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea
          style={styles}
          rows="5"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
