import { ShadowBox as _ShadowBox } from 'components/common';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const registrationWidth = (theme: any) =>
  `calc(${window.innerWidth}px - ${2 * theme.space.s}px)`;

export const Form = styled.form`
  flex: 1;
  ${({ theme }) => theme.mobile && `width: ${registrationWidth(theme)}`};
`;

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: (props: any) => ({
    marginBottom: selectByDevice({ m: 30, d: 60 })(props),
  }),
})``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const btnHeight = { m: 24, d: 38 };
export const Submit = styled.button`
  width: ${selectByDevice({ m: 140, d: 240 })};
  height: ${selectByDevice(btnHeight)};
  border: ${selectByDevice({ m: 1, d: 2 })} solid
    ${({ theme }) => theme.color.blueDark};
  border-radius: ${selectByDevice(btnHeight, 0.5)};
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${fontSizeByDevice('s')};
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
