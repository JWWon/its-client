import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { selectByDevice } from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: (props: any) => ({
    padding: `0 ${selectByDevice({ m: 16, d: 32 })(props)}`,
  }),
})``;
