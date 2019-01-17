import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.s}px 0;
`;

export const Item = styled.a`
  width: 31%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  box-shadow: -1px 3px 5px rgba(0, 0, 0, 0.16);
  object-fit: cover;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${fontSizeByDevice('m')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-left: ${selectByDevice({ m: 10, d: 30 })};
`;
