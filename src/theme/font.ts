export interface FontInterface {
  size: {
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
