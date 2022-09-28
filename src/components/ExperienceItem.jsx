import React from 'react';
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

function ExperienceItem(props) {
  const { experience, onExperienceChange, onDeleteExperience } = props;
  return (
    <div style={styles.form}>
      <Input
        name="organization"
        type="Text"
        placeholder="Organization"
        onChange={(e) => onExperienceChange(e, experience.id)}></Input>
      <Input
        name="position"
        type="Text"
        placeholder="Position"
        onChange={(e) => onExperienceChange(e, experience.id)}></Input>
      <Input
        name="startDate"
        type="number"
        min="1900"
        max="2099"
        placeholder="Start"
        onChange={(e) => onExperienceChange(e, experience.id)}></Input>
      <Input
        name="endDate"
        type="number"
        min="1900"
        max="2099"
        placeholder="End"
        onChange={(e) => onExperienceChange(e, experience.id)}></Input>
      <TextArea
        name="description"
        type="Text"
        placeholder="Description"
        onChange={(e) => onExperienceChange(e, experience.id)}></TextArea>
      <button
        style={styles.button}
        onClick={onDeleteExperience.bind(this, experience.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExperienceItem;
