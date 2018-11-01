import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';
import mobile from 'theme/mobile';

export const ShadowBox = styled(_ShadowBox).attrs({
  single: true,
  style: { marginBottom: `${mobile ? 3 : 6}rem` },
})``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const btnHeight: number = mobile ? 2.4 : 3.8;
export const Submit = styled.button`
  width: ${mobile ? 14 : 24}rem;
  height: ${btnHeight}rem;
  border: ${mobile ? 1 : 2}px solid ${({ theme }) => theme.color.blueDark};
  border-radius: ${btnHeight / 2}rem;
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
