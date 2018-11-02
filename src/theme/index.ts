import * as styledComponents from 'styled-components';

import color, { ColorInterface } from './color';
import font, { FontInterface } from './font';
import mobile from './mobile';
import size, { SizeInterface } from './size';
import space, { SpaceInterface } from './space';

export interface ThemeInterface {
  color: ColorInterface;
  font: FontInterface;
  size: SizeInterface;
  space: SpaceInterface;
  mobile: string | null;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export const theme = { color, font, mobile, size, space };

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
