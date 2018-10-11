import * as styledComponents from 'styled-components';
import color, { ColorInterface } from './color';
import font, { FontInterface } from './font';
import size, { SizeInterface } from './size';
import space, { SpaceInterface } from './space';

export interface ThemeInterface {
  color: ColorInterface;
  font: FontInterface;
  size: SizeInterface;
  space: SpaceInterface;
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

export const theme = { color, font, size, space };

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
