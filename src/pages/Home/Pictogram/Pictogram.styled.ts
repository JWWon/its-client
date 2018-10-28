import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: {
    width: '30%',
    height: '21rem',
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: 9rem;
  object-fit: contain;
  object-position: center;
  margin-bottom: 2.8rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
