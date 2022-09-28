import React from 'react';
import GeneralDisplay from './GeneralDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';

const styles = {
  border: '2px solid blue',
  borderRadius: '5px',
  backgroundColor: 'white',
  padding: '0px 20px',
  color: 'blue',
  width: 400,
  minWidth: 400,
};

const barStyle = {
  backgroundColor: 'blue',
  height: '1px',
  border: 'none',
};

function Display(props) {
  const { data } = props;
  return (
    <div style={styles}>
      <GeneralDisplay data={data} />
      <hr style={barStyle} />
      <ExperienceDisplay data={data} />
      <EducationDisplay data={data} />
    </div>
  );
}

export default Display;
