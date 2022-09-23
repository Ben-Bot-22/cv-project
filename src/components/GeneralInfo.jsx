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

export default class GeneralInfo extends Component {
  render() {
    return (
      <div style={styles}>
        <h3>General Information</h3>
        <Input
          name="name"
          type="Text"
          placeholder="Name"
          onChange={this.props.onChange}></Input>
        <Input
          name="title"
          type="Text"
          placeholder="Title"
          onChange={this.props.onChange}></Input>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.props.onChange}></Input>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone 123-456-7890"
          onChange={this.props.onChange}></Input>
        <Input
          name="location"
          type="Text"
          placeholder="Location"
          onChange={this.props.onChange}></Input>
        <TextArea
          name="description"
          type="Text"
          placeholder="Description..."
          onChange={this.props.onChange}></TextArea>
      </div>
    );
  }
}
