export interface SizeInterface {
  desktop: {
    container: number;
    bisection: number;
    trisection: number;
    navbar: number;
  };
}

const size: SizeInterface = {
  desktop: {
    container: 156.4,
    bisection: 66,
    trisection: 45,
    navbar: 11,
  },
};

export default size;
