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

const EducationItem = (props) => {
  const { education, onEducationChange, onDeleteEducation } = props;
  return (
    <div style={styles.form}>
      <Input
        name="university"
        type="Text"
        placeholder="university"
        onChange={(e) => onEducationChange(e, education.id)}></Input>
      <Input
        name="course"
        type="Text"
        placeholder="course"
        onChange={(e) => onEducationChange(e, education.id)}></Input>
      <Input
        name="startDate"
        type="number"
        min="1900"
        max="2099"
        placeholder="Start"
        onChange={(e) => onEducationChange(e, education.id)}></Input>
      <Input
        name="endDate"
        type="number"
        min="1900"
        max="2099"
        placeholder="End"
        onChange={(e) => onEducationChange(e, education.id)}></Input>
      <button
        style={styles.button}
        onClick={onDeleteEducation.bind(this, education.id)}>
        Delete
      </button>
    </div>
  );
};

export default EducationItem;
