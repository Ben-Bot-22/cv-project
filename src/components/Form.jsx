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
    return (
      <div style={styles}>
        <GeneralForm onChange={this.props.onChange} />
        <ExperienceForm
          data={this.props.data}
          onChange={this.props.onChange}
          onAddExperience={this.props.onAddExperience}
          onDelete={this.props.onDelete}
        />
        <EducationForm />
      </div>
    );
  }
}
