import styled, { selectByDevice } from 'theme';

export const Content = styled.div`
  margin-top: 3.2rem;
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

const space = { m: 0.8, d: 1.6 };

export const DetailInput = styled(Input)`
  margin-left: ${selectByDevice(space)};
`;

const btnHeight = { m: 2.4, d: 3.8 };

export const Button = styled.button.attrs({
  type: 'button',
})`
  width: ${selectByDevice({ m: 8, d: 16 })};
  height: ${selectByDevice(btnHeight)};
  margin-left: ${selectByDevice(space)};
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
