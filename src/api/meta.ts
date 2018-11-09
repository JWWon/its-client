import axios from 'axios';
import { convertFromRaw, EditorState } from 'draft-js';

export interface Footer {
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
}

export interface Content {
  content: EditorState;
}

export const getFooter = async () => {
  const response = await axios.get('/meta');
  const { content, ...other } = response.data;
  return other;
};

export const getContent = async () => {
  const response = await axios.get('/meta');
  const content = JSON.parse(response.data.content);
  const contentState = convertFromRaw(content);
  return { content: EditorState.createWithContent(contentState) };
};
