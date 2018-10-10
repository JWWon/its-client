import * as styledComponents from 'styled-components';
import color, { ColorInterface } from './color';
import size, { SizeInterface } from './size';
// import space from './space'

export interface ThemeInterface {
  color: ColorInterface;
  size: SizeInterface;
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

export const theme = { color, size };

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
