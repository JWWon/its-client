import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { selectByDevice } from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: (props: any) => ({
    padding: `0 ${selectByDevice({ m: 1.6, d: 3.2 })(props)}`,
  }),
})``;
