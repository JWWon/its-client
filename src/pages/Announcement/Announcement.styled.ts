import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: { padding: `0 ${mobile ? 1.6 : 3.2}rem` },
})``;
