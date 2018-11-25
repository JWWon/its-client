import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { selectByDevice } from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  space: '5%',
  style: (props: any) => ({
    width: '30%',
    height: selectByDevice({ m: 'auto', d: '21rem' })(props),
    textAlign: 'center',
  }),
})``;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: ${selectByDevice({ m: 3, d: 9 })};
  object-fit: contain;
  object-position: center;
  margin-bottom: ${selectByDevice({ m: 0.6, d: 2.8 })};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
