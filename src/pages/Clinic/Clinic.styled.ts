import {
  ShadowBox as _ShadowBox,
  TitleWithBar as _TitleWithBar,
} from 'components/common';
import styled from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: { marginBottom: '6rem' },
})``;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: '0 0 4rem',
})``;

export const DivideHalf = styled.div`
  display: flex;
`;

export const Half = styled.div`
  flex: 1;
`;

export const TextRowWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.grayDark};
`;

export const Label = styled(Content)`
  flex-basis: 20rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.blueDark};
`;
