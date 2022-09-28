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

function ExperienceDisplay(props) {
  const { data } = props;
  const { experience } = data;
  return (
    <div>
      <h3>Experience</h3>
      {experience.map((exp) => {
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

export default ExperienceDisplay;
