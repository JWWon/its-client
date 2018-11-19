import axios from 'axios';
import _ from 'lodash';

import { RawDraftContentState } from 'draft-js';
import { moment } from 'lib/functions/moment';

export interface AnnouncementInterface {
  id: string;
  title: string;
  content: RawDraftContentState;
  createdAt: string;
}

export const getAnnouncement = async () => {
  try {
    const response = await axios.get('/announcements');
    const data: AnnouncementInterface[] = response.data;

    _.forEach(data, (announcement: any) => {
      announcement.content = JSON.parse(announcement.content);
      announcement.createdAt = moment(announcement.createdAt);
    });

    return data;
  } catch (e) {
    return e;
  }
};
