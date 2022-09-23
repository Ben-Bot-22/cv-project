import React from 'react';
import Form from './components/Form';
import Display from './components/Display';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Name',
      title: 'Title',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      description: 'Description...',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.name + ' ' + event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div style={styles}>
        <Form onChange={this.handleInputChange} />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;

/*

educational experience (school name, title of study, date
of study)

experience (company name, position title, main tasks
of your jobs, date from and until when you worked for that company)

add and delete buttons for each section
- education
- experience

Typing in the input fields should
display the value of your input fields in HTML elements. 

add your components. 
Styles folder - You’ll need to import these in the component files to use them. 

*/
