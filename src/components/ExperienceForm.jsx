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

export default class ExperienceForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <div style={styles.form}>
        <h3>Experience</h3>
        {this.props.data.experiences.map((experience) => {
          return (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              onExperienceChange={this.props.onExperienceChange}
              onDeleteExperience={this.props.onDeleteExperience}
            />
          );
        })}
        <button style={styles.button} onClick={this.props.onAddExperience}>
          Add
        </button>
      </div>
    );
  }
}
