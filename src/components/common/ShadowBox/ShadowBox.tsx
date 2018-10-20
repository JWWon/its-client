import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
  size?: {
    width: number;
    height: number;
  } | null;
  dimmer?: boolean;
  rmVerticalPadding?: boolean;
  single?: boolean;
  style?: { [x: string]: string };
}

const ShadowBox: React.SFC<Props> = ({
  children,
  size,
  dimmer,
  rmVerticalPadding,
  single,
  style,
}) => (
  <s.Container
    size={size}
    dimmer={dimmer}
    rmVerticalPadding={rmVerticalPadding}
    single={single}
    style={style}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  size: null,
  dimmer: false,
  rmVerticalPadding: false,
  single: false,
};

export default ShadowBox;
