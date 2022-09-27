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
  div: {
    marginBottom: '10px',
  },
};

export default class EducationDisplay extends Component {
  render() {
    const { data } = this.props;
    const { educations } = data;
    return (
      <div style={styles.div}>
        <h3>Education</h3>
        {educations.map((edu) => {
          return (
            <div key={edu.id} style={styles.head}>
              <p style={styles.p}>
                {edu.university} - {edu.course}
              </p>
              <p style={styles.p}>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
