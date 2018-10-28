import icDelete from 'lib/icons/ic_delete.svg';
import styled from 'theme';
import mobile from 'theme/mobile';

const size: number = mobile ? 1.4 : 2.6;

export const Dismiss = styled.div`
  margin-left: auto;
  width: ${size}rem;
  height: ${size}rem;
  background: no-repeat center url(${icDelete});
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  ${!mobile && 'transition: transform ease-out 0.2s'};
`;
