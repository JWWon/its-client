import styled, { selectByDevice } from 'theme';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: ${({ theme }) => theme.color.blackOpacity};
  display: flex;
  flex-direction: column;
`;

const headerHeight = { m: 40, d: 80 };
export const Header = styled.div`
  position: relative;
  height: ${selectByDevice(headerHeight)};
  margin: ${({ theme }) => theme.space.s}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${selectByDevice({ m: '3.6rem', d: '2.2rem' })};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const DismissContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: ${selectByDevice(headerHeight)};
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  flex: 1;
  padding: 0 0 ${({ theme }) => theme.space.s}px;
`;
