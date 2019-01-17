import { Link } from 'react-router-dom';
import styled, { fontSizeByDevice } from 'theme';

const space = 20;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${space}px;
`;

export const Item = styled(Link)`
  flex-basis: 360px;
  margin: 0 ${space}px;
  &:hover {
    img {
      margin-top: -8px;
      margin-bottom: 8px;
      box-shadow: -20px 19px 52px rgba(0, 0, 0, 0.32);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 360px;
  box-shadow: -20px 19px 38px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-out;
  object-fit: cover;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${fontSizeByDevice('s')};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
