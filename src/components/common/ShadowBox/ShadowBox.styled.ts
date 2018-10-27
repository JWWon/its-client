import styled from 'theme';

interface Props {
  size: {
    width: number;
    height: number;
  } | null;
  dimmer: boolean;
  rmVerticalPadding: boolean;
  single?: boolean;
}

export const Container = styled<Props, any>('div')`
  ${({ size, theme }) =>
    size
      ? `width: ${size.width}rem; height: ${size.height}rem;`
      : `flex: 1;
         min-height: ${theme.size.shadowBox}rem;`}
  padding: ${({ rmVerticalPadding, theme }) =>
    `${rmVerticalPadding ? '0 ' : ''}${theme.space.m}rem`};
  box-shadow: ${({ dimmer }) =>
    dimmer ? '-0.2rem 0.4rem 1.5rem ' : '-0.4rem 0.8rem 2rem '}
    rgba(0, 0, 0, 0.16);
  ${({ single, dimmer }) =>
    !single &&
    `
    margin-left: ${dimmer ? 3.5 : 10}rem;
    &:first-of-type {
      margin-left: 0;
    }
  `};
`;
