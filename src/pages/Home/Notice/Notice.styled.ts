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
`;

export const Image = styled.img`
  width: 100%;
  height: 36rem;
  box-shadow: -2rem 1.9rem 3.8rem rgba(0, 0, 0, 0.16);
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  margin: 5.2rem 0 8rem;
  display: flex;
  align-items: center;
`;

const height = 0.8;
export const HrBar = styled.div`
  width: 6rem;
  height: ${height}rem;
  border-radius: ${height / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-right: 2rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.l}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
