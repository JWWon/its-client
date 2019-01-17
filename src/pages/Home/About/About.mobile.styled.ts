import { ShadowBox as _ShadowBox } from 'components/common';
import baseURL from 'lib/constant/baseURL';
import styled, { fontSizeByDevice } from 'theme';

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
  font-size: ${fontSizeByDevice('m')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Container = styled.div`
  width: 72%;
`;

export const PictogramWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const btnHeight: number = 32;
export const More = styled.a.attrs({
  href: `${baseURL}/about`,
})`
  width: 100%;
  height: ${btnHeight}px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.blueDark};
  padding: 0 18px;
  margin-bottom: ${({ theme }) => theme.space.s}px;
  border-radius: ${btnHeight / 2}px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${({ theme }) => theme.color.blueDark};
    font-size: ${fontSizeByDevice('m')};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const ArrowBlue = styled.img.attrs({
  src: arrowBlue,
})`
  width: auto;
  height: 10px;
`;

export const Important = styled.span`
  color: ${({ theme }) => theme.color.blueDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
