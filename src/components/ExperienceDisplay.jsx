import React, { Component } from 'react';

const styles = {
  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  p: {
    margin: '0px',
    fontWeight: 'bold',
  },
};

export default class ExperienceDisplay extends Component {
  render() {
    const { data } = this.props;
    const { experiences } = data;
    return (
      <div>
        <h3>Experience</h3>
        {experiences.map((exp) => {
          return (
            <div key={exp.id}>
              <div style={styles.head}>
                <p style={styles.p}>
                  {exp.organization} - {exp.position}
                </p>
                <p style={styles.p}>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
