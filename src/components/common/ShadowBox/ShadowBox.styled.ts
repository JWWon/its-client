import styled from 'theme';

interface Props {
  dimmer: boolean;
  single: boolean;
  space: string | null;
}

export const Container = styled<Props, any>('div')`
  flex: 1;
  padding: ${({ theme }) => theme.space[theme.mobile ? 's' : 'm']}rem;
  box-sizing: border-box;
  box-shadow: ${({ theme, dimmer }) =>
      theme.mobile
        ? '-0.1rem 0.2rem 0.5rem '
        : dimmer
          ? '-0.2rem 0.4rem 1.5rem '
          : '-0.4rem 0.8rem 2rem '}
    rgba(0, 0, 0, 0.16);
  ${({ single, space, dimmer }) =>
    !single &&
    `margin-left: ${space || (dimmer ? '3.5rem' : '10rem')};
    &:first-of-type {
      margin-left: 0;
    }
  `};
`;
