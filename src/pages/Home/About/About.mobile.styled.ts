import { ShadowBox as _ShadowBox } from 'components/common';
import baseURL from 'lib/constant/baseURL';
import styled from 'theme';

import arrowBlue from 'lib/icons/ic_arrow_blue.svg';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})``;

export const Context = styled.div`
  width: 78%;
  text-align: center;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Container = styled.div`
  width: 72%;
`;

export const PictogramWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const btnHeight: number = 3.2;
export const More = styled.a.attrs({
  href: `${baseURL}/about`,
})`
  width: 100%;
  height: ${btnHeight}rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.blueDark};
  padding: 0 1.8rem;
  margin-bottom: ${({ theme }) => theme.space.s}rem;
  border-radius: ${btnHeight / 2}rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${({ theme }) => theme.color.blueDark};
    font-size: ${({ theme }) => theme.font.size.m}rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const ArrowBlue = styled.img.attrs({
  src: arrowBlue,
})`
  width: auto;
  height: 1rem;
`;

export const Important = styled.span`
  color: ${({ theme }) => theme.color.blueDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
