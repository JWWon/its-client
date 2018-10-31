import {
  ShadowBox as _ShadowBox,
  TitleWithBar as _TitleWithBar,
} from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: { marginBottom: '6rem' },
})``;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: `0 0 ${mobile ? 1.6 : 4}rem`,
})``;

export const InfoWrapper = styled.div`
  display: flex;
  ${mobile && 'flex-direction: column'};
`;

export const FlexOne = styled.div`
  flex: 1;
`;

export const SepcialistWrapper = styled.div`
  display: flex;
`;

interface ImageInterface {
  url: string;
}
const imgWidth: number = mobile ? 6 : 21;
export const Image = styled<ImageInterface, any>('div')`
  width: ${imgWidth}rem;
  height: ${imgWidth * 1.41}rem;
  margin-right: ${mobile ? 2.4 : 4.8}rem;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: ${mobile ? 1.2 : 3}rem;
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
  flex-basis: ${({ theme }) => (theme.mobile ? 8 : 20)}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.blueDark};
  white-space: nowrap;
`;
