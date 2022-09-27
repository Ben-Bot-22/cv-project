import React, { Component } from 'react';

export default class ExperienceDisplay extends Component {
  render() {
    const { data } = this.props;
    const { experiences } = data;
    const { experience } = data;
    const { company, position, description, start, end } = experience;
    return (
      <div>
        <h3>Experience</h3>
        {experiences.map((exp) => {
          return (
            <div key={exp.id}>
              <p>
                {company} - {position}
              </p>
              <p>
                {start} - {end}
              </p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
