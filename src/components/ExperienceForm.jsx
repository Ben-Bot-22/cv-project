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
  // buttonContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '5px',
  //   height: '25px',
  // },
  button: {
    color: 'blue',
    border: '1px solid blue',
    borderRadius: '5px',
    width: '100%',
  },
};

export default class ExperienceForm extends Component {
  // console.log({ this.props });
  render() {
    return (
      <div style={styles.form}>
        <h3>Experience</h3>
        {this.props.data.experiences.map((experience) => {
          return (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              onChange={this.props.onChange}
              onDelete={this.props.onDelete}
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
