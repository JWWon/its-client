import icClose from 'lib/icons/ic_close.svg';
import icCloseWhite from 'lib/icons/ic_close_white.svg';
import styled, { selectByDevice } from 'theme';

const size = { m: 14, d: 26 };

interface Props {
  white?: boolean;
}

export const Dismiss = styled<Props & any>('div')`
  margin-left: auto;
  width: ${selectByDevice(size)};
  height: ${selectByDevice(size)};
  background: no-repeat center
    url(${({ white }) => (white ? icCloseWhite : icClose)});
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  ${selectByDevice({ m: '', d: 'transition: transform ease-out 0.2s' })};
`;
