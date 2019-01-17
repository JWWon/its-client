import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const Content = styled.div`
  margin-top: 32px;
`;

const barSpace = { m: 26, d: 80 };
export const InputWrapper = styled.div`
  margin-top: 20px;
  height: ${selectByDevice({ m: 32, d: 48 })};
  padding-left: ${selectByDevice(barSpace)};
  display: flex;
`;

export const Short = styled.div`
  ${selectByDevice({ m: 'flex: 1', d: 'flex-basis: 650px' })};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
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

const space = { m: 8, d: 16 };

export const DetailInput = styled(Input)`
  margin-left: ${selectByDevice(space)};
`;

const btnHeight = { m: 24, d: 38 };

export const Button = styled.button.attrs({
  type: 'button',
})`
  width: ${selectByDevice({ m: 80, d: 160 })};
  height: ${selectByDevice(btnHeight)};
  margin-left: ${selectByDevice(space)};
  border: ${selectByDevice({ m: '1px', d: '2px' })} solid
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
