import React from 'react';
import Form from './components/Form';
import Display from './components/Display';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
};

function App() {
  return (
    <div style={styles}>
      <Form />
      <Display />
    </div>
  );
}

export default App;

/*

general information like name, email, phone number. 

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
