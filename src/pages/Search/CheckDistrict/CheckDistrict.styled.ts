import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  flex-basis: ${selectByDevice({ m: 36, d: 60 })};
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.blueDark};
  margin-bottom: ${selectByDevice({ m: 24, d: 48 })};
`;

export const Title = styled.h2`
  font-size: ${fontSizeByDevice('m')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.grayDark};
`;

interface DataInterface {
  isCity: boolean;
  selected: boolean;
}

interface TextInterface {
  count: number;
}

export const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  margin: -8px -1%;
`;

const dataHeight = { m: 20, d: 36 };
export const Data = styled<DataInterface & any>('div')`
  flex-basis: ${({ isCity }) => (isCity ? '31.3%' : '23%')};
  margin: 8px 1%;
  height: ${selectByDevice(dataHeight)};
  border-radius: ${selectByDevice(dataHeight, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ selected, theme }) =>
    selected &&
    `background-color: ${theme.color.blueDark};
    p {
      color: ${theme.color.white};
    }`};
  &:hover {
    cursor: pointer;
    ${({ selected, theme }) =>
      !theme.mobile &&
      !selected &&
      `background-color: ${theme.color.grayLight};
      p {
        color: ${theme.color.gray};
      }`};
  }
`;

export const TextWrapper = styled<TextInterface & any>('div')`
  flex: 1;
  padding: 0 calc(${selectByDevice(dataHeight, 0.5)} + 16px);
  display: flex;
  justify-content: space-between;
  ${({ count, theme }) =>
    count < 1 &&
    `p {
      color: ${theme.color.grayLight};
    }`};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${fontSizeByDevice('s')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Count = styled(Name)`
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
