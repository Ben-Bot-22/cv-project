import React, { Component } from 'react';
import Input from './Input';

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
  },
};

export default class EducationItem extends Component {
  render() {
    // console.log(this.props);
    return (
      <div style={styles.form}>
        <Input
          name="university"
          type="Text"
          placeholder="university"
          onChange={(e) =>
            this.props.onEducationChange(e, this.props.education.id)
          }></Input>
        <Input
          name="course"
          type="Text"
          placeholder="course"
          onChange={(e) =>
            this.props.onEducationChange(e, this.props.education.id)
          }></Input>
        <Input
          name="startDate"
          type="number"
          min="1900"
          max="2099"
          placeholder="Start"
          onChange={(e) =>
            this.props.onEducationChange(e, this.props.education.id)
          }></Input>
        <Input
          name="endDate"
          type="number"
          min="1900"
          max="2099"
          placeholder="End"
          onChange={(e) =>
            this.props.onEducationChange(e, this.props.education.id)
          }></Input>
        <button
          style={styles.button}
          onClick={this.props.onDeleteEducation.bind(
            this,
            this.props.education.id,
          )}>
          Delete
        </button>
      </div>
    );
  }
}
