import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const mobile = md.mobile();

export default mobile;
