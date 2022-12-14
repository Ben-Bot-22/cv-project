import React, { Component } from 'react';
import GeneralDisplay from './GeneralDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';

const styles = {
  border: '2px solid blue',
  borderRadius: '5px',
  backgroundColor: 'white',
  padding: '0px 20px',
  color: 'blue',
  width: 400,
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
        <GeneralDisplay data={this.props.data} />
        <hr style={barStyle} />
        <ExperienceDisplay data={this.props.data} />
        <EducationDisplay data={this.props.data} />
      </div>
    );
  }
}
