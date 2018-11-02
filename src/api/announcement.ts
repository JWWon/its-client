import { EditorState } from 'draft-js';
import moment, { Moment } from 'moment';
import axios from './axios';

export interface AnnouncementInterface {
  id: string;
  title: string;
  content: EditorState;
  createdAt: Moment;
}

export const getAnnouncement = async () => {
  try {
    const response = await axios.get('/announcements');
    const data = response.data;
    const result: AnnouncementInterface[] = data.map((e: any) => {
      // e.content = convertFromHTML(e.content);
      // e.createdAt = moment(e.createdAt);
      e.content = EditorState.createEmpty();
      e.createdAt = moment();
      return e;
    });
    return result;
  } catch (e) {
    return e;
  }
};
