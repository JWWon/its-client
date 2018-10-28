import mobile from 'theme/mobile';

import Desktop from './Announcement.desktop';
import Mobile from './Announcement.mobile';

interface Item {
  src: string;
  title: string;
  content: string;
  url: string;
}

export interface Props {
  list: Item[];
}

const Component = () => (mobile ? Mobile : Desktop);

export default Component();
