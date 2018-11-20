import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { selectByDevice } from 'theme';

export const registrationWidth = (theme: any) =>
  `calc(${window.innerWidth}px - ${2 * theme.space.s}rem)`;

export const Form = styled.form`
  flex: 1;
  ${({ theme }) => theme.mobile && `width: ${registrationWidth(theme)}`};
`;

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: (props: any) => ({
    marginBottom: selectByDevice({ m: 3, d: 6 })(props),
  }),
})``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const btnHeight = { m: 2.4, d: 3.8 };
export const Submit = styled.button`
  width: ${selectByDevice({ m: 14, d: 24 })};
  height: ${btnHeight}rem;
  border: ${selectByDevice({ m: '1px', d: '2px' })} solid
    ${({ theme }) => theme.color.blueDark};
  border-radius: ${selectByDevice(btnHeight, 0.5)};
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  background: transparent;
  ${({ theme }) =>
    !theme.mobile &&
    `transition: all 0.2s ease-out;
    &:hover {
      color: ${theme.color.white};
      background: ${theme.color.blueDark};
    }
  `};
`;
