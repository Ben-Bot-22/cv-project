import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

const styles = {
  border: '2px solid blue',
  borderRadius: '5px',
  backgroundColor: 'white',
  padding: '0px 20px',
  width: 200,
  minWidth: 200,
};

export default class Form extends Component {
  render() {
    return (
      <div style={styles}>
        <GeneralInfo onChange={this.props.onChange} />
        <Experience />
        <Education />
      </div>
    );
  }
}
