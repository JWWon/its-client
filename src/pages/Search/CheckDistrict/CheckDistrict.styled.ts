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
  color: ${({ theme }) => theme.color.grayDark};
`;

const dataHeight = 3.6;

interface Props {
  selected: boolean;
}

export const NoCountListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  margin: -1.2rem -1%;
`;

export const NoCountData = styled<Props, any>('div')`
  flex-basis: 23%;
  margin: 1.2rem 1%;
  height: ${dataHeight}rem;
  border-radius: ${dataHeight / 2}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.color.gray};
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
  ${({ selected, theme }) =>
    selected
      ? `background-color: ${theme.color.blueDark};
        p {
          color: ${theme.color.white};
        }`
      : `&:hover {
          background-color: ${theme.color.grayLight};
        }`};
  &:hover {
    cursor: pointer;
  }
`;
