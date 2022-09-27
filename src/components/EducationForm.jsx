import React, { Component } from 'react';
import EducationItem from './EducationItem';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    width: '100%',
    color: 'blue',
  },
  button: {
    color: 'blue',
    border: '1px solid blue',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '10px',
  },
};

export default class EducationForm extends Component {
  render() {
    // console.log('Education Form:');
    // console.log(this.props);
    return (
      <div style={styles.form}>
        <h3>Education</h3>
        {this.props.data.educations.map((edu) => {
          return (
            <EducationItem
              key={edu.id}
              education={edu}
              onEducationChange={this.props.onEducationChange}
              onDeleteEducation={this.props.onDeleteEducation}
            />
          );
        })}
        <button style={styles.button} onClick={this.props.onAddEducation}>
          Add
        </button>
      </div>
    );
  }
}
