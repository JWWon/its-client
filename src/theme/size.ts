import mobile from './mobile';

export interface SizeInterface {
  container: number;
  shadowBox: number;
  navbar: number;
}

const size: SizeInterface = {
  container: 120,
  shadowBox: mobile ? 5.6 : 12,
  navbar: mobile ? 5.6 : 8,
};

export default size;
