import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

const space = '1.4rem';
export const BoxWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.mobile && 'flex-direction: column'};
  width: 100%;
  min-height: 64rem;
  margin: -${space} 0;
`;

export const ShadowBox = styled(_ShadowBox).attrs({
  single: mobile !== null,
  style: {
    margin: '1.4rem 0',
  },
})``;

export const Notice = styled.p`
  margin: 1.6rem 0;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;
