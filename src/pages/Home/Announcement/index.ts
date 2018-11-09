import mobile from 'theme/mobile';

import { News as NewsInterface } from 'api/image';
import Desktop from './Announcement.desktop';
import Mobile from './Announcement.mobile';

export interface Props {
  list: NewsInterface[];
}

const Component = () => (mobile ? Mobile : Desktop);

export default Component();
