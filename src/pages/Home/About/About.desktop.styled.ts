import { Link as _Link } from 'react-router-dom';
import styled, { fontSizeByDevice } from 'theme';

import arrowBlue from 'lib/icons/ic_arrow_blue.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PictogramWrapper = styled(Container)`
  margin-left: ${({ theme }) => theme.space.m}px;
  flex-shrink: 1;
  flex-basis: 600px;
  align-items: center;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${fontSizeByDevice('l')};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 48px;
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${fontSizeByDevice('m')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 40px;
`;

const moreHeight = 50;
export const MoreButton = styled(_Link).attrs({
  to: '/about',
})`
  display: flex;
  width: 160px;
  height: ${moreHeight}px;
  border-radius: ${moreHeight / 2}px;
  border: 3px solid ${({ theme }) => theme.color.blueDark};
  box-sizing: border-box;
  margin-top: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  p {
    color: ${({ theme }) => theme.color.blueDark};
    font-size: ${fontSizeByDevice('s')};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const ArrowBlue = styled.img.attrs({
  src: arrowBlue,
})`
  width: auto;
  height: 16px;
`;

export const Important = styled.span`
  color: ${({ theme }) => theme.color.blueDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
