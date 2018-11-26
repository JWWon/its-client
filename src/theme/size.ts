import { isMobile } from 'react-device-detect';

const size = {
  container: 120,
  shadowBox: isMobile ? 5.6 : 12,
  navbar: isMobile ? 5.6 : 8,
};

export default size;
