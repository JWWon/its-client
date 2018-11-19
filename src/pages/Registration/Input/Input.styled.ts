import styled from 'theme';
import mobile from 'theme/mobile';

export const Content = styled.div`
  margin-top: 3.2rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

const barSpace: number = mobile ? 2.6 : 8;
export const InputWrapper = styled.div`
  margin-top: 2rem;
  height: ${mobile ? 3.2 : 4.8}rem;
  padding-left: ${barSpace}rem;
  display: flex;
`;

export const Short = styled.div`
  ${({ theme }) => (theme.mobile ? 'flex: 1' : 'flex-basis: 65rem')};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
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

export const At = styled.p`
  width: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
