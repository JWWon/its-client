import { isMobile } from 'react-device-detect';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import color from './color';
import font, { FontInterface, SizeType } from './font';
import size, { SizeInterface } from './size';
import space from './space';

export interface ThemeInterface {
  color: { [key in keyof typeof color]: string };
  font: FontInterface;
  size: SizeInterface;
  space: { [key in keyof typeof space]: number };
  mobile: typeof isMobile;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const mobile = isMobile ? true : window.innerHeight > window.innerWidth * 1.7; // 16 : 9
export const theme: ThemeInterface = { color, font, size, space, mobile };

const selectByDevice = (
  obj: { m: number | string; d: number | string },
  multiply?: number,
  unit?: string
) => (props: any) => {
  if (typeof obj.m === 'number' && typeof obj.d === 'number') {
    const result: number = props.theme.mobile ? obj.m : obj.d;
    return `${result * (multiply || 1)}${unit || 'px'}`;
  } else if (typeof obj.m === 'string' && typeof obj.d === 'string') {
    const result: string = props.theme.mobile ? obj.m : obj.d;
    return result;
  }
  return '';
};

const fontSizeByDevice = (type: SizeType) => (props: any) =>
  props.theme.font.size[type][props.theme.mobile ? 'm' : 'd'];

export default styled;
export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  selectByDevice,
  fontSizeByDevice,
};
