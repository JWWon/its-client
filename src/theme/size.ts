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
  container: 120,
  shadowBox: { m: 5.6, d: 12 },
  navbar: { m: 5.6, d: 8 },
};

export default size;
