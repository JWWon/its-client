import styled, { selectByDevice } from 'theme';

interface Props {
  margin: string | null;
  vertical: boolean;
}

interface TitleInterface {
  vertical: boolean;
}

const barHeight = { m: 0.3, d: 0.8 };

export const HrBar = styled<Props & any>('div')`
  width: ${selectByDevice({ m: 2, d: 6 })};
  height: ${selectByDevice(barHeight)};
  margin-right: ${selectByDevice({ m: 0.6, d: 2 })};
  ${({ vertical }) =>
    vertical &&
    `width: 3.6rem;
    margin: 1.4rem 0 0`};
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background-color: ${({ theme }) => theme.color.blueDark};
`;

export const Title = styled<TitleInterface & any>('h3')`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme, vertical }) =>
    theme.mobile
      ? vertical
        ? 4.4
        : theme.font.size.xxl
      : theme.font.size.l}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Wrapper = styled<Props & any>('div')`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '4rem 0'};
  ${({ vertical }) => vertical && 'flex-direction: column-reverse'};
`;
