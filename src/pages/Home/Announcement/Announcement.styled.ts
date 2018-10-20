import { Link } from 'react-router-dom';
import styled from 'theme';

const space = 2;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${space}rem;
`;

export const Item = styled(Link)`
  flex-basis: 36rem;
  margin: 0 ${space}rem;
  &:hover {
    img {
      margin-top: -0.8rem;
      margin-bottom: 0.8rem;
      box-shadow: -2rem 1.9rem 5.2rem rgba(0, 0, 0, 0.32);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 36rem;
  box-shadow: -2rem 1.9rem 3.8rem rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-out;
  object-fit: cover;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
