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
        organization: 'Organization',
        position: 'Position',
        startDate: 'Start Date',
        endDate: 'End Date',
        description: 'Description',
      },
      educations: [],
      education: {
        id: uuidv4(),
        course: 'course / program',
        university: 'university',
        startDate: 'Start Date',
        endDate: 'End Date',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleInputChange(event) {
    // console.log(event.target.name + ' ' + event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAddExperience(e) {
    this.setState((state) => ({
      experiences: state.experiences.concat(state.experience),
      experience: {
        id: uuidv4(),
        organization: 'Organization',
        position: 'Position',
        startDate: 'Start Date',
        endDate: 'End Date',
        description: 'Description',
      },
    }));
  }

  deleteExperience = (id) => {
    console.log('handle detele ' + id);
    this.setState((state) => ({
      experiences: state.experiences.filter((exp) => exp.id !== id),
    }));
  };

  render() {
    return (
      <div className="forms">
        <Form
          data={this.state}
          onChange={this.handleInputChange}
          onAddExperience={this.handleAddExperience}
          onDelete={this.deleteExperience}
        />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;

/*

- Modify onChange to process index
-- Handle change in Form
-- Handle data in Display

************

Button hover effect

- educational experience (school name, title of study, date
of study)

- education form
- education display

*/
