import { ShadowBox as _ShadowBox } from 'components/common';
import landmark from 'lib/icons/ic_landmark.svg';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  space: selectByDevice({ m: 16, d: 35 }),
})``;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BannerSection = styled.div`
  width: 100%;
  display: flex;
`;

export const BannerWrapper = styled.div`
  height: calc(
    ${props => selectByDevice(props.theme.size.shadowBox)(props)} - 20px
  );
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
`;

export const Notice = styled.p`
  margin: 16px 0 0;
  text-align: right;
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;

const barHeight = { m: 3, d: 8 };
export const Bar = styled.div`
  width: ${selectByDevice({ m: 20, d: 60 })};
  height: ${selectByDevice(barHeight)};
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-right: auto;
`;

// *** IMG
export const Icon = styled.img.attrs({ src: landmark })`
  margin: ${selectByDevice({ m: '0 4px 0 8px', d: '0 10px 0 16px' })};
  height: ${selectByDevice({ m: 10, d: 18 })};
  /* ADD FOR IE */
  width: 10px;
`;

export const Landmark = styled.p`
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;
