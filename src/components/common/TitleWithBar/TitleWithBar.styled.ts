import styled from 'theme';

interface Props {
  margin: string | null;
  barPosition: 'top' | 'bottom';
}

const barHeight = (mobile: string | null) => (mobile ? 0.3 : 0.8);

export const HrBar = styled<Props, any>('div')`
  width: ${({ theme }) => (theme.mobile ? 2 : 6)}rem;
  height: ${({ theme }) => barHeight(theme.mobile)}rem;
  margin-right: ${({ theme }) => (theme.mobile ? 0.6 : 2)}rem;
  ${({ barPosition }) =>
    barPosition &&
    `width: 3.6rem;
    margin: 1.4rem 0;
    margin-${barPosition}: 0`};
  border-radius: ${({ theme }) => barHeight(theme.mobile) / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};
`;

export const Title = styled<Props, any>('h3')`
  /* word-break: normal; */
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size[theme.mobile ? 'xxl' : 'l']}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Wrapper = styled<Props, any>('div')`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '4rem 0'};
  ${({ barPosition }) =>
    barPosition &&
    (barPosition === 'bottom'
      ? 'flex-direction: column-reverse'
      : 'flex-direction: column; align-items: flex-start')};
`;
