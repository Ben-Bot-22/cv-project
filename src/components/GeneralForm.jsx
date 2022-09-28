import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  width: '100%',
  color: 'blue',
};

const GeneralForm = ({ onChange }) => {
  return (
    <div style={styles}>
      <h3>General Information</h3>
      <Input
        name="name"
        type="Text"
        placeholder="Name"
        onChange={onChange}></Input>
      <Input
        name="title"
        type="Text"
        placeholder="Title"
        onChange={onChange}></Input>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        onChange={onChange}></Input>
      <Input
        name="phone"
        type="tel"
        placeholder="Phone 123-456-7890"
        onChange={onChange}></Input>
      <Input
        name="location"
        type="Text"
        placeholder="Location"
        onChange={onChange}></Input>
      <TextArea
        name="description"
        type="Text"
        placeholder="Description..."
        onChange={onChange}></TextArea>
    </div>
  );
};

export default GeneralForm;
