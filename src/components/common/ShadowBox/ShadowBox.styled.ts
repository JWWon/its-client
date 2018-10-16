import styled from 'theme';

interface Props {
  size: {
    width: number;
    height: number;
  } | null;
  dimmer: boolean;
}

export const Container = styled<Props, any>('div')`
  ${({ size }) =>
    size
      ? `width: ${size.width}rem; height: ${size.height}rem;`
      : `flex: 1; min-height: 16.6rem;`}
  padding: ${({ theme }) => theme.space.desktop.m}rem;
  box-shadow: ${({ dimmer }) =>
    dimmer ? '-0.2rem 0.4rem 1.5rem ' : '-0.4rem 0.8rem 2rem '}
    rgba(0, 0, 0, 0.16);
    margin-left: ${({ dimmer }) => (dimmer ? 3.5 : 10)}rem;
    &:first-of-type {
      margin-left: 0;
    }
`;
