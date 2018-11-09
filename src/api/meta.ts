import axios from 'axios';

export interface Meta {
  president: string;
  manager: string;
  registration: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook: string;
    instagram: string;
    blog: string;
  };
  content: string; // 소개
}

export const getMeta = async () => {
  const response = await axios.get('/meta');
  return response.data;
};
