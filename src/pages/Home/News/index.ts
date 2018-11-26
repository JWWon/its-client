import { isMobile } from 'react-device-detect';

import { News as NewsInterface } from 'api/image';
import Desktop from './News.desktop';
import Mobile from './News.mobile';

export interface Props {
  list: NewsInterface[];
}

const Component = () => (isMobile ? Mobile : Desktop);

export default Component();
