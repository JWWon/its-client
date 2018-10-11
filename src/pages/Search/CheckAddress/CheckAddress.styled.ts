import styled from 'theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  flex-basis: 6rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.blueDark};
  margin-bottom: 4.8rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.gray};
`;

export const ListWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -1rem -1%;
`;

const dataHeight = 3.6;

export const NoCountData = styled.div`
  flex-basis: 23%;
  margin: 1rem 1%;
  height: ${dataHeight}rem;
  border-radius: ${dataHeight / 2}rem;
  background-color: ${({ theme }) => theme.color.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
