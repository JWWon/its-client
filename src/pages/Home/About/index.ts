import { isMobile } from 'react-device-detect';

import Desktop from './About.desktop';
import Mobile from './About.mobile';

const Component = () => (isMobile ? Mobile : Desktop);

export default Component();
