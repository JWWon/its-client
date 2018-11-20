import styled, { selectByDevice } from 'theme';

export const Content = styled.div`
  margin-top: 3.2rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

const barSpace = { m: 2.6, d: 8 };
export const InputWrapper = styled.div`
  margin-top: 2rem;
  height: ${selectByDevice({ m: 3.2, d: 4.8 })};
  padding-left: ${selectByDevice(barSpace)};
  display: flex;
`;

export const Short = styled.div`
  ${selectByDevice({ m: 'flex: 1', d: 'flex-basis: 65rem' })};
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
