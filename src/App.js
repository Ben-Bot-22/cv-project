import React from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './styles/index.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Name',
      title: 'Title',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      description: 'Description...',
      experiences: [],
      experience: {
        id: uuidv4(),
        organization: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      educations: [],
      education: {
        id: uuidv4(),
        university: '',
        course: '',
        startDate: '',
        endDate: '',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleExperienceChange = (event, id) => {
    this.setState((state) => ({
      experiences: state.experiences.map((exp) => {
        if (exp.id === id) {
          return { ...exp, [event.target.name]: event.target.value };
        } else {
          return exp;
        }
      }),
    }));
  };

  handleEducationChange = (event, id) => {
    this.setState((state) => ({
      educations: state.educations.map((edu) => {
        if (edu.id === id) {
          return { ...edu, [event.target.name]: event.target.value };
        } else {
          return edu;
        }
      }),
    }));
  };

  handleAddExperience(e) {
    this.setState((state) => ({
      experiences: state.experiences.concat(state.experience),
      experience: {
        id: uuidv4(),
        organization: 'Organization',
        position: 'Position',
        startDate: 'Start',
        endDate: 'End',
        description: 'Description',
      },
    }));
  }

  handleAddEducation(e) {
    this.setState((state) => ({
      educations: state.educations.concat(state.education),
      education: {
        id: uuidv4(),
        university: 'University',
        course: 'Course',
        startDate: 'Start',
        endDate: 'End',
      },
    }));
  }

  deleteExperience = (id) => {
    this.setState((state) => ({
      experiences: state.experiences.filter((exp) => exp.id !== id),
    }));
  };

  deleteEducation = (id) => {
    this.setState((state) => ({
      educations: state.educations.filter((edu) => edu.id !== id),
    }));
  };

  render() {
    return (
      <div className="forms">
        <Form
          data={this.state}
          onChange={this.handleInputChange}
          onExperienceChange={this.handleExperienceChange}
          onAddExperience={this.handleAddExperience}
          onDeleteExperience={this.deleteExperience}
          onEducationChange={this.handleEducationChange}
          onDeleteEducation={this.deleteEducation}
          onAddEducation={this.handleAddEducation}
        />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;
