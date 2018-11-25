import icClose from 'lib/icons/ic_close.svg';
import styled, { selectByDevice } from 'theme';

const size = { m: 1.4, d: 2.6 };

export const Dismiss = styled.div`
  margin-left: auto;
  width: ${selectByDevice(size)};
  height: ${selectByDevice(size)};
  background: no-repeat center url(${icClose});
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  ${selectByDevice({ m: '', d: 'transition: transform ease-out 0.2s' })};
`;
