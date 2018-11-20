import landmark from 'lib/icons/ic_landmark.svg';
import styled, { selectByDevice } from 'theme';

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
  height: ${({ theme }) => theme.size.shadowBox - 2}rem;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
`;

export const Notice = styled.p`
  margin: 1.6rem 0 0;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;

const barHeight = { m: 0.3, d: 0.8 };
export const Bar = styled.div`
  width: ${selectByDevice({ m: 2, d: 6 })};
  height: ${selectByDevice(barHeight)};
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-right: auto;
`;

// *** IMG
export const Icon = styled.img.attrs({ src: landmark })`
  margin: ${({ theme }) => `0 1rem 0 ${theme.space.s}rem`};
  height: 1.6rem;
  /* ADD FOR IE */
  width: 1rem;
`;

export const Landmark = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;
