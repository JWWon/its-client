import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

export const ShadowBox = styled(_ShadowBox).attrs({
  space: '5%',
  style: {
    width: '30%',
    height: mobile ? 'auto' : '21rem',
    textAlign: 'center',
  },
})``;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: ${mobile ? 3 : 9}rem;
  object-fit: contain;
  object-position: center;
  margin-bottom: ${mobile ? 0.6 : 2.8}rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
