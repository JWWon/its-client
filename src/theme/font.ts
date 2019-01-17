interface SelectByDevice {
  m: string;
  d: string;
}

export type SizeType = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';

export interface FontInterface {
  size: {
    xxl: SelectByDevice;
    xl: SelectByDevice;
    l: SelectByDevice;
    m: SelectByDevice;
    s: SelectByDevice;
    xs: SelectByDevice;
  };
  weight: {
    light: number;
    demiLight: number;
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
}

const font: FontInterface = {
  size: {
    xxl: { m: '2.6rem', d: '2.6rem' },
    xl: { m: '2.2rem', d: '2.2rem' },
    l: { m: '2rem', d: '2rem' },
    m: { m: '1.8rem', d: '1.8rem' },
    s: { m: '1.6rem', d: '1.6rem' },
    xs: { m: '1.4rem', d: '1.4rem' },
  },
  weight: {
    light: 200,
    demiLight: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },
};

export default font;
