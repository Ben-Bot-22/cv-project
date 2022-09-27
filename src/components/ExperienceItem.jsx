import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

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

export default class ExperienceItem extends Component {
  render() {
    return (
      <div style={styles.form}>
        <Input
          name="organization"
          type="Text"
          placeholder="Organization"
          onChange={this.props.onChange}></Input>
        <Input
          name="position"
          type="Text"
          placeholder="Position"
          onChange={this.props.onChange}></Input>
        <Input
          name="startDate"
          type="Text"
          placeholder="Start"
          onChange={this.props.onChange}></Input>
        <Input
          name="endDate"
          type="Text"
          placeholder="End"
          onChange={this.props.onChange}></Input>
        <TextArea
          name="description"
          type="Text"
          placeholder="Description"
          onChange={this.props.onChange}></TextArea>
        <button
          style={styles.button}
          onClick={this.props.onDelete.bind(this, this.props.experience.id)}>
          Delete
        </button>
      </div>
    );
  }
}
