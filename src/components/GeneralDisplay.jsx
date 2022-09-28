import React from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const nameStyle = {
  margin: '0px 10px 0px 0px',
};

const titleStyle = {
  margin: '0px 10px 10px 0px',
};

const pStyle = {
  fontSize: '12px',
  margin: '0px',
};

const dataStyle = {
  marginTop: '5px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  alignItems: 'flex-end',
};

const descStyle = {
  margin: '0px',
  fontSize: '12px',
};

function GeneralDisplay(props) {
  const { data } = props;
  const { name, title, phone, email, location, description } = data;
  return (
    <div>
      <div style={styles}>
        <div>
          <h2 style={nameStyle}>{name}</h2>
          <h3 style={titleStyle}>{title}</h3>
        </div>
        <div style={dataStyle}>
          <p style={pStyle}>{phone}</p>
          <p style={pStyle}>{email}</p>
          <p style={pStyle}>{location}</p>
        </div>
      </div>
      <p style={descStyle}>{description}</p>
    </div>
  );
}

export default GeneralDisplay;
