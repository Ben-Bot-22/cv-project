import React from 'react';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralForm from './GeneralForm';

const styles = {
  border: '2px solid blue',
  borderRadius: '5px',
  backgroundColor: 'white',
  padding: '0px 20px',
  width: 200,
  minWidth: 200,
};

const Form = (props) => {
  const {
    data,
    onChange,
    onExperienceChange,
    onAddExperience,
    onDeleteExperience,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
  } = props;
  return (
    <div style={styles}>
      <GeneralForm onChange={onChange} />
      <ExperienceForm
        data={data}
        onExperienceChange={onExperienceChange}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
      />
      <EducationForm
        data={data}
        onEducationChange={onEducationChange}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      />
    </div>
  );
};

export default Form;
