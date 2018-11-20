import { createGlobalStyle, selectByDevice } from 'theme';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default createGlobalStyle`
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

  html {
    font-size: ${selectByDevice({ m: '25%', d: '62.5%' })};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  :lang(ko) {
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    padding: 0;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  h1 {
    font-size: 2.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a:hover {
    cursor: pointer;
  }

  button:focus,
  div:focus,
  nav:focus {
    outline: none;
  }
`;
