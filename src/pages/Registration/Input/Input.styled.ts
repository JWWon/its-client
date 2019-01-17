import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const Content = styled.div`
  margin-top: 32px;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 20px;
  height: ${selectByDevice({ m: 32, d: 48 })};
  padding-left: ${selectByDevice({ m: 26, d: 80 })};
  display: flex;
`;

export const Short = styled.div`
  ${selectByDevice({ m: 'flex: 1', d: 'flex-basis: 650px' })};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 20px;
  background: ${({ theme }) => theme.color.whiteDark};
  color: ${({ theme }) => theme.color.black};
  font-size: ${fontSizeByDevice('s')};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-weight: ${({ theme }) => theme.font.weight.demiLight};
  }
`;

export const At = styled.p`
  width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  font-size: ${fontSizeByDevice('s')};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
