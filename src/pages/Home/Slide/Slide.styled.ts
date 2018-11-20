import styled, { selectByDevice } from 'theme';
import { slideHeight } from '../Home.styled';

interface Props {
  url: string;
}

export const Slide = styled<Props & any>('div')`
  width: 100%;
  height: ${selectByDevice(slideHeight, 1, 'vh')};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
