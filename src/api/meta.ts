import axios from 'axios';
import { convertToRaw, EditorState, RawDraftContentState } from 'draft-js';

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
  content: RawDraftContentState;
}

export const getFooter = async () => {
  const response = await axios.get('/meta');
  const { content, ...other } = response.data;
  return other;
};

export const getContent = async () => {
  const response = await axios.get('/meta');
  const { content } = response.data;
  if (content) {
    return { content: JSON.parse(content) };
  } else {
    return {
      content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    };
  }
};
