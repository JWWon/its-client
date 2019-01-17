interface SelectByDevice {
  m: number;
  d: number;
}

export interface SizeInterface {
  container: number;
  shadowBox: SelectByDevice;
  navbar: SelectByDevice;
}

const size = {
  container: 1200,
  shadowBox: { m: 56, d: 120 },
  navbar: { m: 56, d: 80 },
};

export default size;
