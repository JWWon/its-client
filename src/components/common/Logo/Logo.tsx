import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './Logo.styled';

const Logo: React.SFC<{}> = () => (
  <Link to="/">
    <s.Logo />
  </Link>
);

export default Logo;
