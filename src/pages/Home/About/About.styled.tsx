import { Link as _Link } from 'react-router-dom';
import styled from 'theme';

import arrowBlue from 'lib/icons/ic_arrow_blue.svg';

export const PictogramWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled(PictogramWrapper)`
  justify-content: space-between;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 4.8rem;
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  line-height: 4rem;
`;

const moreHeight = 5;
export const MoreButton = styled(_Link).attrs({
  to: '/about',
})`
  display: flex;
  width: 16rem;
  height: ${moreHeight}rem;
  border-radius: ${moreHeight / 2}rem;
  border: 3px solid ${({ theme }) => theme.color.blueDark};
  box-sizing: border-box;
  margin-top: 4.8rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  p {
    color: ${({ theme }) => theme.color.blueDark};
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const ArrowBlue = styled.img.attrs({
  src: arrowBlue,
})`
  width: auto;
  height: 1.6rem;
`;
