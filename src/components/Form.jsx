import React, { Component } from 'react';
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

export default class Form extends Component {
  render() {
    // console.log('Form Props:');
    // console.log(this.props);
    return (
      <div style={styles}>
        <GeneralForm onChange={this.props.onChange} />
        <ExperienceForm
          data={this.props.data}
          onExperienceChange={this.props.onExperienceChange}
          onAddExperience={this.props.onAddExperience}
          onDeleteExperience={this.props.onDeleteExperience}
        />
        <EducationForm
          data={this.props.data}
          onEducationChange={this.props.onEducationChange}
          onAddEducation={this.props.onAddEducation}
          onDeleteEducation={this.props.onDeleteEducation}
        />
      </div>
    );
  }
}
