import {
  ShadowBox as _ShadowBox,
  TitleWithBar as _TitleWithBar,
} from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

import icPhone from 'lib/icons/ic_phone.svg';

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

const btnSize = 5.6;
export const PhoneButton = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: ${({ theme }) => theme.space.m}rem;
  right: ${({ theme }) => theme.space.s}rem;
  width: ${btnSize}rem;
  height: ${btnSize}rem;
  border-radius: ${btnSize / 2}rem;
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: -0.1rem 0.2rem 0.5rem rgba(0, 0, 0, 0.16);
  display: ${mobile ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

export const PhoneIcon = styled.img.attrs({
  src: icPhone,
  alt: 'phone',
})`
  width: ${btnSize * 0.52}rem;
  height: ${btnSize * 0.52}rem;
`;
