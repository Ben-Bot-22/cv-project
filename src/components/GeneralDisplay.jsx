import React, { Component } from 'react';

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

export default class GeneralDisplay extends Component {
  render() {
    return (
      <div>
        <div style={styles}>
          <div>
            <h2 style={nameStyle}>{this.props.data.name}</h2>
            <h3 style={titleStyle}>{this.props.data.title}</h3>
          </div>
          <div style={dataStyle}>
            <p style={pStyle}>{this.props.data.phone}</p>
            <p style={pStyle}>{this.props.data.email}</p>
            <p style={pStyle}>{this.props.data.location}</p>
          </div>
        </div>
        <p style={descStyle}>{this.props.data.description}</p>
      </div>
    );
  }
}
