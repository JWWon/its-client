import styled from 'theme';
import { slideHeight } from '../Home.styled';

interface Props {
  url: string;
}

export const Slide = styled<Props, any>('div')`
  width: 100%;
  height: ${({ theme }) => slideHeight(theme.mobile)}vh;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
