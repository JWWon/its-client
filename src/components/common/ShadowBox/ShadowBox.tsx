import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
}

const ShadowBox: React.SFC<Props> = ({ children }) => (
  <s.Container>{children}</s.Container>
);

export default ShadowBox;
