import styled from 'theme';
import mobile from 'theme/mobile';

export const Content = styled.div`
  margin-top: 3.2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.mobile ? 3.2 : 4.8)}rem;
  margin-top: 2rem;
  padding-left: ${({ theme }) => (theme.mobile ? 2.6 : 8)}rem;
  box-sizing: border-box;
  display: flex;
`;

export const Short = styled.div`
  ${({ theme }) => (theme.mobile ? 'flex: 1' : 'flex-basis: 65rem')};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  flex: 1;
  height: 100%;
  padding: 0 2rem;
  background: ${({ theme }) => theme.color.whiteDark};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-weight: ${({ theme }) => theme.font.weight.demiLight};
  }
`;

const space = mobile ? 0.8 : 1.6;

export const DetailInput = styled(Input)`
  margin-left: ${space}rem;
`;

const btnHeight: number = mobile ? 2.4 : 3.8;

export const Button = styled.button`
  width: ${mobile ? 8 : 16}rem;
  height: ${btnHeight}rem;
  margin-left: ${space}rem;
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
