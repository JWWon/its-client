import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  space: '5%',
  style: (props: any) => ({
    width: '30%',
    height: selectByDevice({ m: 'auto', d: '210px' })(props),
    textAlign: 'center',
  }),
})``;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: ${selectByDevice({ m: 30, d: 90 })};
  object-fit: contain;
  object-position: center;
  margin-bottom: ${selectByDevice({ m: 6, d: 28 })};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
