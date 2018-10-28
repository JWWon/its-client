import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
  single?: boolean;
  dimmer?: boolean;
  style?: { [x: string]: string };
}

const ShadowBox: React.SFC<Props> = ({ children, dimmer, single, style }) => (
  <s.Container dimmer={dimmer} single={single} style={style}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  dimmer: false,
  single: false,
};

export default ShadowBox;
