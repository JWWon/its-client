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

export const Input = styled.input`
  flex: 1;
  height: 4.8rem;
  padding: 0 2rem;
  margin-right: 42rem;
  background: ${({ theme }) => theme.color.whiteDark};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-weight: ${({ theme }) => theme.font.weight.demiLight};
  }
`;
