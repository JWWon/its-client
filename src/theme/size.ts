export interface SizeInterface {
  desktop: {
    container: number;
    shadowBox: number;
    navbar: number;
  };
}

const size: SizeInterface = {
  desktop: {
    container: 120,
    shadowBox: 12,
    navbar: 8,
  },
};

export default size;
