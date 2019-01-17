import styled from 'theme';

interface Props {
  dimmer: boolean;
  single: boolean;
  space: string | null;
}

export const Container = styled<Props & any>('div')`
  flex: 1;
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space[theme.mobile ? 's' : 'm']}px;
  box-sizing: border-box;
  box-shadow: ${({ theme, dimmer }) =>
      theme.mobile
        ? '-1px 2px 5px '
        : dimmer
        ? '-2px 4px 15px '
        : '-4px 8px 20px '}
    rgba(0, 0, 0, 0.16);
  ${({ single, space, dimmer }) =>
    !single &&
    `margin-left: ${space || (dimmer ? '35px' : '100px')};
    &:first-of-type {
      margin-left: 0;
    }
  `};
`;
