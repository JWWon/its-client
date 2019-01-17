import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { selectByDevice } from 'theme';

const space = '14px';
export const BoxWrapper = styled.div`
  display: flex;
  ${selectByDevice({ m: 'flex-direction: column', d: '' })};
  width: 100%;
  min-height: 640px;
  margin: -${space} 0;
`;

export const ShadowBox = styled(_ShadowBox).attrs({
  single: ({ theme }: any) => theme.mobile,
  style: (props: any) => ({
    margin: selectByDevice({ m: `${space} 0`, d: '' })(props),
  }),
})``;

export const Notice = styled.p`
  margin: 16px 0;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;
