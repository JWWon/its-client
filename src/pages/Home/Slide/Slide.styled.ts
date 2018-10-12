import styled from 'theme';

interface Props {
  url: string;
}

const height: number = 64;

export const Slide = styled<Props, any>('div')`
  width: 100%;
  height: ${height}vh;
  border-top-left-radius: ${height / 2}vh;
  border-bottom-left-radius: ${height / 2}vh;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
