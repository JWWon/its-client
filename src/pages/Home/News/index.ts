import mobile from 'theme/mobile';

import { News as NewsInterface } from 'api/image';
import Desktop from './News.desktop';
import Mobile from './News.mobile';

export interface Props {
  list: NewsInterface[];
}

const Component = () => (mobile ? Mobile : Desktop);

export default Component();
