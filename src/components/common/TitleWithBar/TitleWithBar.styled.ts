import styled, { selectByDevice } from 'theme';

interface Props {
  margin: string | null;
  vertical: boolean;
}

interface TitleInterface {
  vertical: boolean;
}

const barHeight = { m: 3, d: 8 };

export const HrBar = styled<Props & any>('div')`
  width: ${selectByDevice({ m: 16, d: 60 })};
  height: ${selectByDevice(barHeight)};
  margin-right: ${selectByDevice({ m: 6, d: 20 })};
  ${({ vertical }) =>
    vertical &&
    `width: 36px;
    margin: 14px 0 0`};
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background-color: ${({ theme }) => theme.color.blueDark};
`;

export const Title = styled<TitleInterface & any>('h3')`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme, vertical }) =>
    theme.mobile ? (vertical ? 2.4 : 1.2) : 2}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Wrapper = styled<Props & any>('div')`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '40px 0'};
  ${({ vertical }) => vertical && 'flex-direction: column-reverse'};
`;
