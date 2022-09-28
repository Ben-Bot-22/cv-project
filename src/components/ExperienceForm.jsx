import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

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

const ExperienceForm = (props) => {
  const { data, onExperienceChange, onAddExperience, onDeleteExperience } =
    props;
  return (
    <div style={styles.form}>
      <h3>Experience</h3>
      {data.experience.map((exp) => {
        return (
          <ExperienceItem
            key={exp.id}
            experience={exp}
            onExperienceChange={onExperienceChange}
            onDeleteExperience={onDeleteExperience}
          />
        );
      })}
      <button style={styles.button} onClick={onAddExperience}>
        Add
      </button>
    </div>
  );
};

export default ExperienceForm;
