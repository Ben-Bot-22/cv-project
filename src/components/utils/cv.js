import { v4 as uuidv4 } from 'uuid';

const cv = {
  generalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  },
  experience: [
    {
      id: uuidv4(),
      organization: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: '',
      course: '',
      startDate: '',
      endDate: '',
    },
  ],
};

export default cv;
