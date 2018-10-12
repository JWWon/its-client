import styled from 'theme';
import { height } from '../Home.styled';

interface Props {
  url: string;
}

export const Slide = styled<Props, any>('div')`
  width: 100%;
  height: ${height}vh;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
