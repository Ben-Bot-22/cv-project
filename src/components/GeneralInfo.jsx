import React, { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  width: '100%',
  color: 'blue',
}

export default class GeneralInfo extends Component {
    render() {
    return (
        <div style={styles}>
            <h3>General Information</h3>
            <Input type='Text' placeholder='Name'></Input>
            <Input type='Text' placeholder='Title'></Input>
            <Input type='email' placeholder='Email'></Input>
            <Input type='tel' placeholder='Phone 123-456-7890'></Input>
            <Input type='Text' placeholder='Location'></Input>
            <TextArea type='Text' placeholder='Description...'></TextArea>
        </div>
    );
  }
}