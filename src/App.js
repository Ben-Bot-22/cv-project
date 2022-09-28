import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './styles/index.css';
import { v4 as uuidv4 } from 'uuid';
import cvObj from './components/utils/cv';

const App = () => {
  const [cv, setCv] = useState(cvObj);

  const handleGeneralChange = (event) => {
    setCv((prevState) => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleExperienceChange = (event, id) => {
    const { name, value } = event.target;
    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleEducationChange = (event, id) => {
    const { name, value } = event.target;
    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddExperience = (e) => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          organization: 'Organization',
          position: 'Position',
          startDate: 'Start',
          endDate: 'End',
          description: 'Description',
        },
      ],
    }));
  };

  const handleAddEducation = (e) => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          university: 'University',
          course: 'Course',
          startDate: 'Start',
          endDate: 'End',
        },
      ],
    }));
  };

  const deleteExperience = (id) => {
    setCv((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((exp) => exp.id !== id),
    }));
  };

  const deleteEducation = (id) => {
    setCv((prevState) => ({
      ...prevState,
      education: prevState.education.filter((edu) => edu.id !== id),
    }));
  };

  return (
    <div className="forms">
      <Form
        data={cv}
        onChange={handleGeneralChange}
        onExperienceChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={deleteExperience}
        onEducationChange={handleEducationChange}
        onDeleteEducation={deleteEducation}
        onAddEducation={handleAddEducation}
      />
      <Display data={cv} />
    </div>
  );
};

export default App;
