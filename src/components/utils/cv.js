import { v4 as uuidv4 } from 'uuid';

const cv = {
  generalInfo: {
    name: 'Name',
    title: 'Title',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    description: 'Description',
  },
  experience: [
    {
      id: uuidv4(),
      organization: 'Organization',
      position: 'Position',
      startDate: 'Start',
      endDate: 'End',
      description: 'Description...',
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: 'University',
      course: 'Course',
      startDate: 'Start',
      endDate: 'End',
    },
  ],
};

export default cv;
