import React, { Component } from "react";

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
}

const nameStyle = {
  margin: '0px 10px 0px 0px',
}

const titleStyle = {
  margin: '0px 10px 10px 0px',
}

const pStyle = {
    fontSize: '12px',
    margin: '0px',
}

const dataStyle = {
  marginTop: '5px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  alignItems: 'flex-end',
}

const descStyle = {
  margin: '0px',
    fontSize: '12px',
}

export default class DisplayGeneral extends Component {
    render() {
        return (
            <div>

        <div style={styles}>
            <div>
              <h1 style={nameStyle}>Name</h1>
              <h3 style={titleStyle}>Title</h3>
            </div>
            <div style={dataStyle}>
                <p style={pStyle}>Phone</p>
                <p style={pStyle}>Email</p>
                <p style={pStyle}>Location</p>
            </div>
        </div>
                <p style={descStyle}>Description...</p>

            </div>
        );
    }
}