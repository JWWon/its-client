import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  size?: {
    width: number;
    height: number;
  } | null;
  dimmer?: boolean;
  children: ReactNode;
}

const ShadowBox: React.SFC<Props> = ({ children, size, dimmer }) => (
  <s.Container size={size} dimmer={dimmer}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  size: null,
  dimmer: false,
};

export default ShadowBox;
