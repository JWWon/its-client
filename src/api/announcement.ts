import axios from 'axios';

import { convertFromRaw, EditorState } from 'draft-js';
import moment, { Moment } from 'moment';

export interface AnnouncementInterface {
  id: string;
  title: string;
  content: EditorState;
  createdAt: Moment;
}

export const getAnnouncement = async () => {
  try {
    const response = await axios.get('/announcements');
    const { data } = response;

    data.forEach((announcement: any) => {
      const content = JSON.parse(announcement.content);
      const contentState = convertFromRaw(content);
      announcement.content = EditorState.createWithContent(contentState);
      announcement.createdAt = moment();
    });

    return data;
  } catch (e) {
    return e;
  }
};
