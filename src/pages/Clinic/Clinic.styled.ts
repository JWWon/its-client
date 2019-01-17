import {
  ShadowBox as _ShadowBox,
  TitleWithBar as _TitleWithBar,
} from 'components/common';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';

import icPhone from 'lib/icons/ic_phone.svg';

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: { marginBottom: '60px' },
})``;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: (props: any) => `0 0 ${selectByDevice({ m: 16, d: 40 })(props)}`,
})``;

export const InfoWrapper = styled.div`
  display: flex;
  ${selectByDevice({ m: 'flex-direction: column', d: '' })};
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
const labelSpace = { m: 80, d: 200 };
export const Image = styled<ImageInterface & any>('div')`
  flex-basis: ${selectByDevice(labelSpace)};
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center left;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: ${selectByDevice({ m: 12, d: 30 })};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Content = styled.p`
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.black};
`;

export const Label = styled(Content)`
  flex-basis: ${selectByDevice(labelSpace)};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.blueDark};
  white-space: nowrap;
`;

const btnSize = 64;
export const PhoneButton = styled.a`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${btnSize}px;
  background: ${({ theme }) => theme.color.blue};
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.16);
  display: ${selectByDevice({ m: 'flex', d: 'none' })};
  justify-content: center;
  align-items: center;
`;

export const PhoneIcon = styled.img.attrs({
  src: icPhone,
  alt: 'phone',
})`
  width: ${btnSize * 0.4}px;
  height: ${btnSize * 0.4}px;
`;

export const PhoneText = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin-left: 12px;
  font-size: 4.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const linkHeight = { m: 24, d: 48 };
export const Link = styled.div`
  margin: 0 auto;
  width: ${selectByDevice({ m: 100, d: 320 })};
  box-sizing: border-box;
  height: ${selectByDevice(linkHeight)};
  border-radius: ${selectByDevice(linkHeight, 0.5)};
  background: ${({ theme }) => theme.color.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: ${fontSizeByDevice('m')};
  transition: all 0.2s ease-out;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.blueDark};
  }
`;

export const FullImage = styled<ImageInterface & any>('div')`
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
