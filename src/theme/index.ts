import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import color from './color';
import font, { FontInterface } from './font';
import mobile from './mobile';
import size from './size';
import space from './space';

export interface ThemeInterface {
  color: { [key in keyof typeof color]: string };
  font: FontInterface;
  size: { [key in keyof typeof size]: number };
  space: { [key in keyof typeof space]: number };
  mobile: string | null;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export const theme: ThemeInterface = { color, font, mobile, size, space };

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
