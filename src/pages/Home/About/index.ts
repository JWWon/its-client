import mobile from 'theme/mobile';

import Desktop from './About.desktop';
import Mobile from './About.mobile';

const Component = () => (mobile ? Mobile : Desktop);

export default Component();
