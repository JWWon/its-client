import _moment from 'moment';

export const moment = (date?: string) =>
  date ? _moment(date).format('YYYY.MM.DD') : '';
