import styled from 'theme';

export const Content = styled.div`
  margin-top: 3.2rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-left: 8rem;
  box-sizing: border-box;
  display: flex;
`;

export const Short = styled.div`
  flex-basis: 65rem;
  height: 4.8rem;
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
