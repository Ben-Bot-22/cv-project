import React from 'react';
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

const EducationForm = (props) => {
  const { data, onEducationChange, onAddEducation, onDeleteEducation } = props;
  return (
    <div style={styles.form}>
      <h3>Education</h3>
      {data.education.map((edu) => {
        return (
          <EducationItem
            key={edu.id}
            education={edu}
            onEducationChange={onEducationChange}
            onDeleteEducation={onDeleteEducation}
          />
        );
      })}
      <button style={styles.button} onClick={onAddEducation}>
        Add
      </button>
    </div>
  );
};

export default EducationForm;
