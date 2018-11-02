import _moment from 'moment';

export const moment = (date?: string) => _moment(date).format('YYYY.MM.DD');
