export interface FontInterface {
  size: {
    xxl: number;
    xl: number;
    l: number;
    m: number;
    s: number;
    xs: number;
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
    xxl: 2.8,
    xl: 2.4,
    l: 2,
    m: 1.8,
    s: 1.6,
    xs: 1.4,
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
