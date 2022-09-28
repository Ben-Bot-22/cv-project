import React from 'react';

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

function EducationDisplay(props) {
  const { data } = props;
  const { education } = data;
  return (
    <div style={styles.div}>
      <h3>Education</h3>
      {education.map((edu) => {
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

export default EducationDisplay;
