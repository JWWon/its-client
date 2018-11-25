import {
  ShadowBox as _ShadowBox,
  TitleWithBar as _TitleWithBar,
} from 'components/common';
import styled, { selectByDevice } from 'theme';

import icPhone from 'lib/icons/ic_phone.svg';

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: { marginBottom: '6rem' },
})``;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: (props: any) => `0 0 ${selectByDevice({ m: 1.6, d: 4 })(props)}`,
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
const imgWidth = { m: 6, d: 21 };
export const Image = styled<ImageInterface & any>('div')`
  width: ${selectByDevice(imgWidth)};
  height: ${selectByDevice(imgWidth, 1.41)};
  margin-right: ${selectByDevice({ m: 2.4, d: 4.8 })};
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: ${selectByDevice({ m: 1.2, d: 3 })};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.black};
`;

export const Label = styled(Content)`
  flex-basis: ${selectByDevice({ m: 8, d: 20 })};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.blueDark};
  white-space: nowrap;
`;

const btnSize = 6.4;
export const PhoneButton = styled.a`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${btnSize}rem;
  background: ${({ theme }) => theme.color.blue};
  box-shadow: -0.1rem 0.2rem 0.5rem rgba(0, 0, 0, 0.16);
  display: ${selectByDevice({ m: 'flex', d: 'none' })};
  justify-content: center;
  align-items: center;
`;

export const PhoneIcon = styled.img.attrs({
  src: icPhone,
  alt: 'phone',
})`
  width: ${btnSize * 0.4}rem;
  height: ${btnSize * 0.4}rem;
`;

export const PhoneText = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin-left: 1.2rem;
  font-size: 4.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const linkHeight = { m: 2.4, d: 4.8 };
export const Link = styled.div`
  margin: 0 auto;
  width: ${selectByDevice({ m: 10, d: 32 })};
  box-sizing: border-box;
  height: ${selectByDevice(linkHeight)};
  border-radius: ${selectByDevice(linkHeight, 0.5)};
  background: ${({ theme }) => theme.color.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  transition: all 0.2s ease-out;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.blueDark};
  }
`;
