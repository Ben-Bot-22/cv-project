import React, { Component } from "react";

const styles = {
    resize: 'none',
    width: '100%',
}

export default class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea style={styles}
          rows="5"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}